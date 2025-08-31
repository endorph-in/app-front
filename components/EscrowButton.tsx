"use client"

import { useState } from 'react'
import { type Address } from 'viem'
import { Button } from './ui/button'
import { useJoinEscrow } from '../hooks/useJoinEscrow'
import { Loader2 } from 'lucide-react'

interface EscrowButtonProps {
  // Direcciones de contratos que obtienes de tu backend
  usdcAddress: Address
  escrowAddress: Address
  // Cantidad en USDC (string, ej: "5.0")
  amount: string
  // Texto del botón
  children?: React.ReactNode
  // Callbacks
  onSuccess?: (result: any) => void
  onError?: (error: string) => void
  // Props del botón
  className?: string
  disabled?: boolean
}

export function EscrowButton({
  usdcAddress,
  escrowAddress,
  amount,
  children = "Join Pool",
  onSuccess,
  onError,
  className = "",
  disabled = false,
}: EscrowButtonProps) {
  const { executeJoin, isLoading, status, error, address } = useJoinEscrow()

  const handleClick = async () => {
    await executeJoin({
      usdcAddress,
      escrowAddress,
      amount,
      onSuccess,
      onError,
    })
  }

  const isDisabled = disabled || isLoading || !address

  return (
    <div className="space-y-2">
      <Button
        onClick={handleClick}
        disabled={isDisabled}
        className={`${className} disabled:opacity-50`}
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <Loader2 className="w-4 h-4 animate-spin" />
            Processing...
          </div>
        ) : (
          children
        )}
      </Button>
      
      {/* Status/Error Display */}
      {status && (
        <p className="text-sm text-green-600">{status}</p>
      )}
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
      {!address && (
        <p className="text-sm text-gray-500">Please connect your wallet</p>
      )}
    </div>
  )
}
