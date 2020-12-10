import { Gradients, cssGradients } from "../style";

export const getGradients = () => {
  const gradients: cssGradients = {
    gradient1: Gradients.LightGradient1,
    gradient2: Gradients.LightGradient2,
    textGradient: Gradients.LightTextGradient,
    textGradient2: Gradients.LightTextGradient2,
    borderGradient: Gradients.LightBorderGradient,
  };

  return gradients;
};
