
import React from 'react';
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative w-10 h-10 overflow-hidden">
        <div className="absolute inset-0 bg-rwanda-blue rounded-tl-full"></div>
        <div className="absolute inset-0 rotate-90 bg-rwanda-yellow rounded-tl-full"></div>
        <div className="absolute inset-0 rotate-180 bg-rwanda-green rounded-tl-full"></div>
      </div>
      <span className="font-bold text-xl tracking-tight">Irabaruta Shop</span>
    </div>
  );
};

export default Logo;
