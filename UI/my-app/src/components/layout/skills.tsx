/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "@emotion/react";
import { style } from "./skills.css";
import { Bounce } from "react-reveal";
import { SkillWithProgress } from "../controls/skillsWithProgress";

export const Skills: FunctionComponent = () => {
  return (
    <Bounce big>
      <div css={style}>
        <SkillWithProgress Name="ReactJS" Progress={65} />
      </div>
    </Bounce>
  );
};
