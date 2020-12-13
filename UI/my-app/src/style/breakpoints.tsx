type Breakpoints = {
  small: string;
  medium: string;
  large: string;
  xlarge: string;
  xxlarge: string;
};

type PixelBreakpoints = {
  small: number;
  medium: number;
  large: number;
  xlarge: number;
  xxlarge: number;
};

type MediaQueries = {
  small: string;
  medium: string;
  large: string;
  xlarge: string;
  xxlarge: string;
  retina: string;
};

export const breakpoints: Breakpoints = {
  //Relative unit at 16px = 1rem. Helps with scaling.
  small: "45.2rem", // 768px
  medium: "60.24rem", // 1024px
  large: "80.4rem", // 1366px
  xlarge: "112.95rem", // 1920px
  xxlarge: "150.625rem", // 2560px
};

export const pixelBreakpoints: PixelBreakpoints = {
  small: 768,
  medium: 1024,
  large: 1366,
  xlarge: 1920,
  xxlarge: 2560,
};

export const mediaQueries: MediaQueries = {
  // Media Queries
  small: `screen and (max-width: ${breakpoints.small})`,
  medium: `screen and (max-width: ${breakpoints.medium})`,
  large: `screen and (max-width: ${breakpoints.large})`,
  xlarge: `screen and (max-width: ${breakpoints.xlarge})`,
  xxlarge: `screen and (max-width: ${breakpoints.xxlarge})`,
  retina: `screen and (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)`,
};
