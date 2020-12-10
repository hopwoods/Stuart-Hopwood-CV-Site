interface IGradients {
  DarkGradient1: string;
  DarkGradient2: string;
  LightGradient1: string;
  LightGradient2: string;
  DarkTextGradient: string;
  LightTextGradient: string;
  DarkTextGradient2: string;
  LightTextGradient2: string;
  DarkBorderGradient: string;
  LightBorderGradient: string;
}

export type cssGradients = {
  gradient1: string;
  gradient2: string;
  textGradient: string;
  textGradient2: string;
  borderGradient: string;
};

export const Gradients: IGradients = {
  DarkGradient1: `background: rgb(56,58,61);
background: linear-gradient(156deg, rgba(56,58,61,1) 0%, rgba(62,65,72,1) 47%, rgba(88,62,53,1) 100%);`,

  DarkGradient2: `background: rgb(40,40,44);
  background: linear-gradient(165deg, rgba(40,40,44,1) 65%, rgba(88,18,0,1) 86%, rgba(156,32,0,1) 100%);`,

  LightGradient1: `background: rgb(245,245,245);
  background: linear-gradient(165deg, rgba(245,245,245,1) 40%, rgba(255,242,242,1) 75%, rgba(224,120,81,1) 100%);`,

  LightGradient2: `background: rgb(254,254,254);
background: linear-gradient(160deg, rgba(254,254,254,1) 0%, rgba(254,254,254,1) 47%, rgba(200,200,200,1) 100%);`,

  DarkTextGradient: `background: rgb(253,29,29);
  background: linear-gradient(90deg, rgba(253,29,29,1) 0%, rgba(255,192,0,1) 90%);`,

  LightTextGradient: `background: rgb(253,29,29);
  background: linear-gradient(90deg, rgba(253,29,29,1) 0%, rgba(255,192,0,1) 90%);`,

  DarkTextGradient2: `background: rgb(131,58,180);
  background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);`,

  LightTextGradient2: `background: rgb(131,58,180);
  background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);`,

  DarkBorderGradient: `linear-gradient(to right, #E07851 0%, #B55C53 100%);`,

  LightBorderGradient: `linear-gradient(to right, #E07851 0%, #B55C53 100%);`,
};
