/** @jsx jsx */
//import React from "react";
import { jsx } from "@emotion/react";
import {
  style,
  name,
  progressBar,
  progressCircle,
} from "./skillsWithProgress.css";
import { FunctionComponent, useEffect, useState } from "react";
import { CircularProgressWithLabel } from "./circularProgressWithLabel";
import { LinearProgress, Tooltip } from "@material-ui/core";

type SkillWithProgress = {
  Name: string;
  Progress: number;
};

export const SkillWithProgress: FunctionComponent<SkillWithProgress> = ({
  Name,
  Progress,
  ...props
}) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, Progress);
      });
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, [Progress]);

  return (
    <Tooltip title={`${Progress}% Career Experience`} arrow>
      <div className="skill" css={style}>
        <span css={name}>{Name}</span>
        <span css={progressBar}>
          <LinearProgress variant="determinate" value={progress} />
        </span>
        <span css={progressCircle}>
          <CircularProgressWithLabel value={progress} />
        </span>
      </div>
    </Tooltip>
  );
};
