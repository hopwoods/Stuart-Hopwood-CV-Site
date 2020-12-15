/** @jsx jsx */
import { FunctionComponent, useEffect, useState } from "react";
import { jsx } from "@emotion/react";
import { Globals } from "../../functions/";
import { Api } from "../../functions";
import { Loading } from ".";
import { style } from "./aboutText.css";
import parse from "html-react-parser";

type AboutText = {
  id: number;
  text: string;
};

export const AboutText: FunctionComponent = () => {
  const [aboutText, setAboutText] = useState<AboutText>({
    id: 0,
    text: "Default",
  });
  const [loading, setLoading] = useState(true);
  const apiUrl = Globals.apiSettings.audience;

  useEffect(() => {
    Api.get<AboutText>(`${apiUrl}AboutText`).then((data) => {
      setAboutText(data.data);
      setLoading(false);
    });
  }, [apiUrl]);

  return loading ? <Loading /> : <div css={style}>{parse(aboutText.text)}</div>;
};
