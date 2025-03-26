/**
 * Formats a numeric value as a currency with compact notation
 * @param value - The numeric value to format
 * @returns Formatted currency string
 */
export const formatValue = (value: number): string => Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumSignificantDigits: 3,
  notation: 'compact',
}).format(value);

/**
 * Formats a numeric value with compact notation (e.g., 1K, 1M)
 * @param value - The numeric value to format
 * @returns Formatted string
 */
export const formatThousands = (value: number): string => Intl.NumberFormat('en-US', {
  maximumSignificantDigits: 3,
  notation: 'compact',
}).format(value);

/**
 * Gets the value of a CSS variable from the document root
 * @param variable - The CSS variable name (including --) 
 * @returns The value of the CSS variable
 */
export const getCssVariable = (variable: string): string => {
  return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
};

/**
 * Adjusts the opacity of a hex color
 * @param hexColor - Hex color code (e.g., #RRGGBB)
 * @param opacity - Opacity value between 0 and 1
 * @returns RGBA color string
 */
const adjustHexOpacity = (hexColor: string, opacity: number): string => {
  hexColor = hexColor.replace('#', '');

  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

/**
 * Adjusts the opacity of an HSL color
 * @param hslColor - HSL color string
 * @param opacity - Opacity value between 0 and 1
 * @returns HSLA color string
 */
const adjustHSLOpacity = (hslColor: string, opacity: number): string => {
  return hslColor.replace('hsl(', 'hsla(').replace(')', `, ${opacity})`);
};

/**
 * Adjusts the opacity of an OKLCH color
 * @param oklchColor - OKLCH color string
 * @param opacity - Opacity value between 0 and 1
 * @returns OKLCH color string with opacity
 */
const adjustOKLCHOpacity = (oklchColor: string, opacity: number): string => {
  return oklchColor.replace(/oklch\((.*?)\)/, (match, p1) => `oklch(${p1} / ${opacity})`);
};

/**
 * Adjusts the opacity of a color string (supports hex, HSL, and OKLCH)
 * @param color - Color string in hex, HSL, or OKLCH format
 * @param opacity - Opacity value between 0 and 1
 * @returns Color string with adjusted opacity
 * @throws Error if color format is not supported
 */
export const adjustColorOpacity = (color: string, opacity: number): string => {
  if (color.startsWith('#')) {
    return adjustHexOpacity(color, opacity);
  } else if (color.startsWith('hsl')) {
    return adjustHSLOpacity(color, opacity);
  } else if (color.startsWith('oklch')) {
    return adjustOKLCHOpacity(color, opacity);
  } else {
    throw new Error('Unsupported color format');
  }
};
