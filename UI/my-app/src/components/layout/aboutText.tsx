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
  const apiUrl = Globals.ApiSettings.Audience;

  useEffect(() => {
    Api.get<AboutText>(`${apiUrl}AboutText`)
      .then((data) => {
        setAboutText(data.data);
        setLoading(false);
      })
      .catch(function (error) {
        if (error.response) {
          // Request made and server responded
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
      });
  }, [apiUrl]);

  return loading ? <Loading /> : <div css={style}>{parse(aboutText.text)}</div>;
};
