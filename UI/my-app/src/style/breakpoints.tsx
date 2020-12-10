interface IBreakpoints {
  small: string;
  medium: string;
  large: string;
  xlarge: string;
  xxlarge: string;
}

interface IMediaQueries {
  small: string;
  medium: string;
  large: string;
  xlarge: string;
  xxlarge: string;
  retina: string;
}

export const breakpoints: IBreakpoints = {
  //Relative unit at 16px = 1rem. Helps with scaling.
  small: "45.2rem", // 768px
  medium: "60.22rem", // 1024px
  large: "80.4rem", // 1366px
  xlarge: "112.95rem", // 1920px
  xxlarge: "150.625rem", // 2560px
};

export const mediaQueries: IMediaQueries = {
  // Media Queries
  small: `screen and (min-width: ${breakpoints.small})`,
  medium: `screen and (min-width: ${breakpoints.medium})`,
  large: `screen and (min-width: ${breakpoints.large})`,
  xlarge: `screen and (min-width: ${breakpoints.xlarge})`,
  xxlarge: `screen and (min-width: ${breakpoints.xxlarge})`,
  retina: `screen and (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)`,
};
