/** @jsx jsx */
import React, { FunctionComponent } from "react";
import { jsx, css } from "@emotion/react";
import useTheme from "../../hooks/useTheme";
import { getGradients } from "../../functions";
import { FontFamilies } from "../../style";

export interface ITextBoxProps {
  onChange(e: React.FormEvent<HTMLInputElement>): void;
}

export const Logo: FunctionComponent = () => {
  const gradients = getGradients();
  const themeColors = useTheme();

  const style = css`
    position: relative;
    color: ${themeColors.text};
    text-decoration: none;
    text-transform: uppercase;
    margin: 0;
    font-weight: 100;
  `;

  return <h1 css={style}>Stuart Hopwood</h1>;
};
