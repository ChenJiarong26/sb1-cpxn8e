import { ReactNode } from 'react';

export interface Market {
  pair: string;
  price: string;
  change: string;
  trending: boolean;
}

export interface QuickAction {
  icon: ReactNode;
  label: string;
  subtext: string;
  highlight?: boolean;
}

export interface SearchBarProps {
  onSearch?: (value: string) => void;
  placeholder?: string;
}