// Design System Tokens for Moon Site Template
// This file contains all the design tokens used throughout the application

export const designTokens = {
  // Color System
  colors: {
    primary: {
      50: 'bg-blue-50 dark:bg-blue-900/20',
      500: 'bg-blue-500',
      600: 'bg-blue-600 hover:bg-blue-700',
      text: 'text-blue-600 dark:text-blue-400',
      textHover: 'hover:text-blue-700 dark:hover:text-blue-300',
    },
    secondary: {
      50: 'bg-purple-50 dark:bg-purple-900/20',
      500: 'bg-purple-500',
      600: 'bg-purple-600 hover:bg-purple-700',
      text: 'text-purple-600 dark:text-purple-400',
      textHover: 'hover:text-purple-700 dark:hover:text-purple-300',
    },
    success: {
      50: 'bg-green-50 dark:bg-green-900/20',
      500: 'bg-green-500',
      600: 'bg-green-600 hover:bg-green-700',
      text: 'text-green-600 dark:text-green-400',
      textHover: 'hover:text-green-700 dark:hover:text-green-300',
    },
    neutral: {
      50: 'bg-gray-50 dark:bg-gray-800',
      100: 'bg-gray-100 dark:bg-gray-800',
      200: 'bg-gray-200 dark:bg-gray-700',
      text: 'text-gray-700 dark:text-gray-300',
      textHover: 'hover:text-gray-900 dark:hover:text-white',
      textMuted: 'text-gray-600 dark:text-gray-400',
    },
    gradient: {
      primary: 'bg-gradient-to-r from-blue-600 to-purple-600',
      primaryText: 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent',
      logo: 'bg-gradient-to-br from-blue-500 to-purple-600',
      logoText: 'bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent',
      hero: 'bg-gradient-to-br from-blue-500 to-purple-600',
      accent: 'bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700',
    }
  },

  // Spacing System
  spacing: {
    xs: 'p-2',
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
    xl: 'p-8',
    '2xl': 'p-12',
    gap: {
      xs: 'gap-2',
      sm: 'gap-3',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
    },
    margin: {
      xs: 'm-2',
      sm: 'm-3',
      md: 'm-4',
      lg: 'm-6',
      xl: 'm-8',
    }
  },

  // Border Radius System
  borderRadius: {
    sm: 'rounded',
    md: 'rounded-lg',
    lg: 'rounded-xl',
    xl: 'rounded-2xl',
    full: 'rounded-full',
  },

  // Shadow System
  shadows: {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    glow: 'shadow-lg hover:shadow-xl',
  },

  // Typography System
  typography: {
    heading: {
      xs: 'text-lg font-semibold',
      sm: 'text-xl font-semibold',
      md: 'text-2xl font-semibold',
      lg: 'text-3xl font-bold',
      xl: 'text-4xl font-bold',
      '2xl': 'text-5xl font-bold',
      '3xl': 'text-6xl font-bold',
    },
    body: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    }
  },

  // Transition System
  transitions: {
    fast: 'transition-all duration-150',
    default: 'transition-all duration-200',
    slow: 'transition-all duration-300',
    colors: 'transition-colors duration-200',
    transform: 'transition-transform duration-200',
  },

  // Interactive States
  interactive: {
    hover: 'hover:scale-105',
    focus: 'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
    active: 'active:scale-95',
    disabled: 'disabled:opacity-50 disabled:cursor-not-allowed',
  },

  // Glass Morphism Effects
  glassMorphism: {
    light: 'bg-white/95 backdrop-blur-sm',
    dark: 'bg-gray-900/95 backdrop-blur-sm',
    card: 'bg-white/10 backdrop-blur-sm border border-white/20',
  },

  // Component Variants
  components: {
    button: {
      sizes: {
        sm: 'px-3 py-2 text-sm',
        md: 'px-4 py-2 text-sm',
        lg: 'px-6 py-3 text-base',
        xl: 'px-8 py-3 text-base',
      },
      variants: {
        primary: 'bg-blue-600 hover:bg-blue-700 text-white',
        secondary: 'bg-purple-600 hover:bg-purple-700 text-white',
        outline: 'border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300',
        ghost: 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300',
        link: 'text-blue-600 dark:text-blue-400 hover:underline',
      }
    },
    card: {
      variants: {
        default: 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700',
        elevated: 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg',
        glass: 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50',
      }
    },
    badge: {
      variants: {
        primary: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200',
        secondary: 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200',
        success: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200',
        neutral: 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200',
      }
    }
  }
};

// Utility function to combine token classes
export const cn = (...classes: (string | undefined | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

// Helper functions for common patterns
export const getButtonClasses = (variant: keyof typeof designTokens.components.button.variants, size: keyof typeof designTokens.components.button.sizes = 'md') => {
  return cn(
    designTokens.components.button.sizes[size],
    designTokens.components.button.variants[variant],
    designTokens.borderRadius.md,
    designTokens.transitions.colors,
    designTokens.interactive.focus,
    'font-medium inline-flex items-center justify-center'
  );
};

export const getCardClasses = (variant: keyof typeof designTokens.components.card.variants = 'default') => {
  return cn(
    designTokens.components.card.variants[variant],
    designTokens.borderRadius.lg,
    designTokens.spacing.lg
  );
};

export const getBadgeClasses = (variant: keyof typeof designTokens.components.badge.variants = 'neutral') => {
  return cn(
    designTokens.components.badge.variants[variant],
    designTokens.borderRadius.full,
    'px-3 py-1 text-xs font-medium'
  );
}; 