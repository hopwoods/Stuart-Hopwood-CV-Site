type GlobalsProps = {
  ApiSettings: ApiSettings;
  ClientSettings: ClientSettings;
};

type ApiSettings = {
  Domain: string;
  Audience: string;
};

type ClientSettings = {
  ClientId: string;
  RedirectUrl: string;
};

export const Globals: GlobalsProps = {
  ClientSettings: {
    ClientId: "jDQJS0iW7T1i3RCpmTYjAqOzFDiiUZ25",
    RedirectUrl: "https://localhost:3000/admin",
  },
  ApiSettings: {
    Domain: "dev-uzn2jv6o.eu.auth0.com",
    Audience: "https://localhost:5001/api/",
  },
};
