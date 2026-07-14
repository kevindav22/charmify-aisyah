'use client';

import Link from 'next/link';
import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import { FaWhatsapp } from 'react-icons/fa6';
import { formatWhatsAppLink } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'plain';

const base = 'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold transition-all duration-300';

const variants: Record<Variant, string> = {
  primary: 'bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500 text-white shadow-lg shadow-rose-200 hover:-translate-y-0.5',
  secondary: 'border border-rose-200 bg-white/80 text-slate-700 backdrop-blur hover:border-rose-300 hover:bg-white',
  plain: 'bg-white text-rose-600 hover:-translate-y-0.5',
};

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
}

export const Button = ({
  children,
  href,
  variant = 'primary',
  className = '',
  ...rest
}: ButtonProps & AnchorHTMLAttributes<HTMLAnchorElement> & ButtonHTMLAttributes<HTMLButtonElement>) => {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
};

interface WhatsAppButtonProps {
  phone: string;
  message?: string;
  children?: ReactNode;
  variant?: Variant;
  className?: string;
}

export const WhatsAppButton = ({ 
  phone, 
  message = '', 
  children = 'Hubungi Kami', 
  variant = 'secondary', 
  className = '' 
}: WhatsAppButtonProps) => {
  const href = formatWhatsAppLink(phone, message);

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${variants[variant]} ${className}`}>
      <FaWhatsapp />
      {children}
    </a>
  );
};