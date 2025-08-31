import { useState } from 'react'
import { useAccount, useChainId } from 'wagmi'
import { parseUnits, type Address } from 'viem'
import { joinEscrow } from '../lib/escrow'
import { config } from '../lib/wagmi'
import { validateContractAddresses } from '../lib/contracts'

export function useJoinEscrow() {
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState('')
  const [error, setError] = useState<string | null>(null)
  
  const { address } = useAccount()
  const chainId = useChainId()

  const executeJoin = async ({
    usdcAddress,
    escrowAddress,
    amount,
    onSuccess,
    onError: onErrorCallback,
  }: {
    usdcAddress?: Address  // Now optional - will use validation to get defaults
    escrowAddress?: Address  // Now optional - will use validation to get defaults
    amount: string // Amount in USDC (e.g., "5.0")
    onSuccess?: (result: any) => void
    onError?: (error: string) => void
  }) => {
    if (!address) {
      const errorMsg = "Wallet not connected"
      setError(errorMsg)
      onErrorCallback?.(errorMsg)
      return
    }

    setIsLoading(true)
    setError(null)
    
    try {
      // Validate and get contract addresses
      const { usdc, escrow } = validateContractAddresses(chainId)
      
      // Use provided addresses or defaults from validation
      const finalUsdcAddress = usdcAddress || usdc
      const finalEscrowAddress = escrowAddress || escrow
      
      console.log("Executing join with:", {
        providedUsdc: usdcAddress,
        providedEscrow: escrowAddress,
        finalUsdcAddress,
        finalEscrowAddress,
        amount,
        userAddress: address,
        chainId
      })
      
      // Convert amount to USDC units (6 decimals)
      const amountBigInt = parseUnits(amount, 6)
      
      const result = await joinEscrow({
        config,
        account: address,
        usdc: finalUsdcAddress,
        escrow: finalEscrowAddress,
        amount: amountBigInt,
        onStatus: setStatus,
        onError: (err) => {
          console.error("Join escrow error:", err)
          let errorMsg = "Transaction failed"
          
          // Check for specific error types
          if (err && typeof err === 'object' && 'message' in err) {
            const message = err.message as string
            
            if (message.includes('ChunkLoadError') || message.includes('Loading chunk')) {
              errorMsg = `🔄 Error de carga del navegador. Por favor, recarga la página e intenta de nuevo.`
            } else if (message.includes('allowance') && message.includes('returned no data')) {
              errorMsg = `❌ El contrato USDC en ${finalUsdcAddress} no es válido en esta red. Asegúrate de estar en la red correcta (Base Sepolia para testnet).`
            } else if (message.includes('ContractFunctionZeroDataError')) {
              errorMsg = `❌ Error de contrato: La dirección ${message.includes('allowance') ? 'USDC' : 'Escrow'} no es un contrato válido en esta red.`
            } else if (message.includes('insufficient funds')) {
              errorMsg = "💰 Saldo insuficiente de USDC"
            } else if (message.includes('rejected')) {
              errorMsg = "🚫 Transacción rechazada por el usuario"
            } else if (message.includes('network')) {
              errorMsg = `🌐 Error de red: Verifica que estés conectado a la red correcta`
            } else if (message.includes('gas')) {
              errorMsg = `⛽ Error de gas: Verifica que tengas suficiente ETH para gas`
            }
          }
          
          setError(errorMsg)
          onErrorCallback?.(errorMsg)
        }
      })

      setStatus("Successfully joined escrow!")
      onSuccess?.(result)
      return result
    } catch (err) {
      console.error("Error joining escrow:", err)
      let errorMsg = "Failed to join escrow"
      
      // Handle ChunkLoadError specifically
      if (err && typeof err === 'object' && 'message' in err) {
        const message = err.message as string
        if (message.includes('ChunkLoadError') || message.includes('Loading chunk')) {
          errorMsg = "🔄 Error de carga del navegador. Por favor, recarga la página e intenta de nuevo."
        }
      }
      
      setError(errorMsg)
      onErrorCallback?.(errorMsg)
      throw err
    } finally {
      setIsLoading(false)
      setTimeout(() => setStatus(''), 3000) // Clear status after 3 seconds
    }
  }

  return {
    executeJoin,
    isLoading,
    status,
    error,
    address,
    chainId,
  }
}
