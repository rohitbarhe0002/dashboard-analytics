import { Theme } from '../utils/ThemeContext';
import { ICONS } from '../components/Icons/Icon';
import {
    ChartData
  } from 'chart.js';
import { CSSProperties, JSX, ReactNode } from 'react';
  
export type ChartType = 
  | 'bar-1' 
  | 'bar-2' 
  | 'bar-3' 
  | 'line-1' 
  | 'line-2' 
  | 'realtime' 
  | 'doughnut'
  | 'progress-bar' 
  | 'progress-doughnut'
  | 'scatter'
export interface ChartProps {
    type: ChartType;
    data: ChartData;
    width: number;
    height: number;
    className?: string;
  }
export interface ColorStop {
    stop: number;
    color: string;
  }

export interface ColorSet {
    light: string;
    dark: string;
  }
export interface Column {
  header: string;
  accessor: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  render?: (value: any, row: any) => React.ReactNode;
}

export interface TableProps {
  columns: Column[];
  data: any[];
}  

export interface DropdownProfileProps {
    align?: "left" | "right";
  }
  export interface LayoutProps {
    children: React.ReactNode;
  }
  export type IconName = keyof typeof ICONS;

  export interface IconProps {
      name: IconName;
      className?: string;
      width?: number | string;
      height?: number | string;
      color?: string;
  }
export interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  variant?: "default" | "v2" | "v3";
}

export interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  variant?: "default" | "v2" | "v3";
}
export interface LowerSectionProps {
  title: string;
  subtitle?: string;
  component: React.ComponentType<any>;
  componentProps?: any;
  className?: string;
}
export interface BarChartCardProps {
  title: string;
  summary?: {
    value?: string;
    percentage?: string;
    isNegative?: boolean;
  };
  component: React.ComponentType<any>;
  componentProps?: any;
}

export interface DashboardCardProps {
  title: string;
  subtitle: string;
  amount?: string;
  percentageChange?: string;
  component:  React.ComponentType<any>;
  componentProps?:any
}

export interface ThemeContextType {
  currentTheme: Theme;
  changeCurrentTheme: (theme: Theme) => void;
}

export interface ThemeProviderProps {
  children: ReactNode;
}

export interface TransitionContextType {
  parent: {
    show?: boolean;
    isInitialRender?: boolean;
    appear?: boolean;
  };
}

export interface CSSTransitionProps {
  show?: boolean;
  enter?: string;
  enterStart?: string;
  enterEnd?: string;
  leave?: string;
  leaveStart?: string;
  leaveEnd?: string;
  appear?: boolean;
  unmountOnExit?: boolean;
  tag?: keyof JSX.IntrinsicElements;
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
  [key: string]: any;
}

export interface TransitionProps extends CSSTransitionProps {  show?: boolean;
  appear?: boolean;
}