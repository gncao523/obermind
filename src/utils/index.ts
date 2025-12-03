// Utility functions

/**
 * Combines class names, filtering out falsy values
 */
export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ')
}

/**
 * Formats a number with commas
 */
export const formatNumber = (num: number): string => {
  return num.toLocaleString()
}

// Add more utility functions as needed

