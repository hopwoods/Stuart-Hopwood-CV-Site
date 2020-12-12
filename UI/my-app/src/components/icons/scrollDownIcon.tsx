/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, css, keyframes } from "@emotion/react";

type ScrollDownIconProps = {
  color: string;
};

export const ScrollDownIcon: FunctionComponent<ScrollDownIconProps> = ({
  color,
}) => {
  const scroll = keyframes`
    0% { 
        opacity: 1;
    }
    100% { 
        opacity: 0;
        transform: translateY(30px);
    }
`;
  const style = css`
    width: 40px;
    height: 70px;
    margin-left: -20px;
    top: 50%;
    margin-top: -35px;
    box-shadow: inset 0 0 0 2px ${color};
    border-radius: 25px;
    position: absolute;
    left: 50%;

    :before {
      content: "";
      width: 8px;
      height: 12px;
      background: ${color};
      margin-left: -4px;
      top: 8px;
      border-radius: 4px;
      animation-duration: 1.5s;
      animation-iteration-count: infinite;
      animation-name: ${scroll};
      position: absolute;
      left: 50%;
    }
  `;

  return <div className="icon-scroll" css={style}></div>;
};
