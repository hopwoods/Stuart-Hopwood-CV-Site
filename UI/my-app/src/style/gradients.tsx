type Gradients = {
  Gradient1: string;
  Gradient2: string;
  TextGradient: string;
  TextGradient2: string;
  BorderGradient: string;
};

export const gradients: Gradients = {
  Gradient1: `background: rgb(56,58,61);
  background: linear-gradient(
    45deg,
    rgba(37, 41, 52, 1) 0%,
    rgba(92, 17, 73, 1) 11%,
    rgba(221, 0, 63, 1) 40%,
    rgba(221, 0, 63, 1) 46%,
    rgba(167, 24, 104, 1) 65%,
    rgba(108, 15, 89, 1) 86%,
    rgba(37, 41, 52, 1) 100%
  );`,

  Gradient2: `background: rgb(40,40,44);
  background: linear-gradient(165deg, rgba(40,40,44,1) 65%, rgba(88,18,0,1) 86%, rgba(156,32,0,1) 100%);`,

  TextGradient: `background: rgb(253,29,29);
  background: linear-gradient(90deg, rgba(253,29,29,1) 0%, rgba(255,192,0,1) 90%);`,

  TextGradient2: `background: rgb(131,58,180);
  background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);`,

  BorderGradient: `linear-gradient(to right, #E07851 0%, #B55C53 100%);`,
};
