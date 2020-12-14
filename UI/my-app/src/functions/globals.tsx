type GlobalsProps = {
  apiSettings: ApiSettings;
};

type ApiSettings = {
  audience: string;
};

export const Globals: GlobalsProps = {
  apiSettings: {
    audience: "https://localhost:5001/api/",
  },
};
