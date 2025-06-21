import React from 'react'
import { useId } from 'react'
import clsx from 'clsx'

export function Logomark({
  className,
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
}) {
  return (
    <Image
      src={logoPng}
      alt="Logo"
      className={className}
      height={32}

    />
  );
}




import Image from "next/image";
import logoPng from "@/images/amulogo.png"; // publicフォルダに保存

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src={logoPng}
      alt="Logo"
      className={className}
      height={32}
      
    />
  );
}

