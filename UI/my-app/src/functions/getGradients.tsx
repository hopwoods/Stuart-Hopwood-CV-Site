import { Gradients, cssGradients } from "../style";

export const getGradients = (darkMode: boolean) => {
  const gradients: cssGradients = {
    gradient1: darkMode ? Gradients.DarkGradient1 : Gradients.LightGradient1,
    gradient2: darkMode ? Gradients.DarkGradient2 : Gradients.LightGradient2,
    textGradient: darkMode
      ? Gradients.DarkTextGradient
      : Gradients.LightTextGradient,
    textGradient2: darkMode
      ? Gradients.DarkTextGradient2
      : Gradients.LightTextGradient2,
    borderGradient: darkMode
      ? Gradients.DarkBorderGradient
      : Gradients.LightBorderGradient,
  };

  return gradients;
};
