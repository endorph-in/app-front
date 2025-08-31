"use client"

import { useState } from 'react'
import { Button } from './ui/button'
import { useJoinEscrow } from '../hooks/useJoinEscrow'
import { USDC_ADDRESS, ESCROW_ADDRESS, validateContractAddresses } from '../lib/contracts'
import { Loader2 } from 'lucide-react'

interface JoinPoolButtonProps {
  // Cantidad en USDC (string, ej: "5.0")
  amount: string
  // Pool info para mostrar
  poolName?: string
  // Callbacks
  onSuccess?: (result: any) => void
  onError?: (error: string) => void
  // Props del botón
  className?: string
  disabled?: boolean
  children?: React.ReactNode
}

export function JoinPoolButton({
  amount,
  poolName,
  onSuccess,
  onError,
  className = "w-full h-12 font-montserrat font-medium text-lg rounded-lg",
  disabled = false,
  children,
}: JoinPoolButtonProps) {
  const { executeJoin, isLoading, status, error, address } = useJoinEscrow()

  const handleClick = async () => {
    try {
      // Validate contract addresses
      validateContractAddresses()
      
      await executeJoin({
        usdcAddress: USDC_ADDRESS,
        escrowAddress: ESCROW_ADDRESS,
        amount,
        onSuccess: (result) => {
          console.log("Successfully joined pool:", result)
          onSuccess?.(result)
        },
        onError: (err) => {
          console.error("Failed to join pool:", err)
          onError?.(err)
        },
      })
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "Contract configuration error"
      console.error("Contract validation error:", err)
      onError?.(errorMsg)
    }
  }

  const isDisabled = disabled || isLoading || !address

  return (
    <div className="space-y-2">
      <Button
        onClick={handleClick}
        disabled={isDisabled}
        className={`${className} disabled:opacity-50`}
        style={{ 
          backgroundColor: isLoading ? "#A69F94" : "#A8BF84", 
          color: "#0D0D0D" 
        }}
        onMouseEnter={(e) => {
          if (!isLoading) {
            e.currentTarget.style.backgroundColor = "#004225"
            e.currentTarget.style.color = "#F2F2F2"
          }
        }}
        onMouseLeave={(e) => {
          if (!isLoading) {
            e.currentTarget.style.backgroundColor = "#A8BF84"
            e.currentTarget.style.color = "#0D0D0D"
          }
        }}
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <Loader2 className="w-4 h-4 animate-spin" />
            Processing...
          </div>
        ) : (
          children || `Join ${poolName || 'Pool'} (${amount} USDC)`
        )}
      </Button>
      
      {/* Status Display */}
      {status && (
        <div className="text-center py-1">
          <p className="text-sm font-montserrat" style={{ color: "#004225" }}>
            {status}
          </p>
        </div>
      )}
      
      {/* Error Display */}
      {error && (
        <div className="text-center py-1">
          <p className="text-sm font-montserrat" style={{ color: "#DC2626" }}>
            {error}
          </p>
        </div>
      )}
      
      {/* Wallet not connected */}
      {!address && (
        <div className="text-center py-1">
          <p className="text-sm font-montserrat" style={{ color: "#A69F94" }}>
            Please connect your wallet to join
          </p>
        </div>
      )}
    </div>
  )
}
