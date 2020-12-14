import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from "react";

import { AxiosResponse, Globals } from "../../functions/";
import { Api } from "../../functions";
import { Loading } from ".";

type AboutText = {
  id: number;
  text: string;
};

export const AboutText: FunctionComponent = () => {
  const [aboutText, setAboutText] = useState<AboutText>();
  const [loading, setLoading] = useState(true);
  const apiUrl = Globals.apiSettings.audience;

  const loadAboutText = useCallback(() => {
    Api.get<AboutText>(`${apiUrl}AboutText`).then((response) => {
      setAboutText(response.data);
      setLoading(false);
      console.log(response.data);
    });
  }, [apiUrl]);

  useEffect(() => {
    loadAboutText();
  }, [loadAboutText]);

  return <span>{aboutText?.text}</span>;
};
