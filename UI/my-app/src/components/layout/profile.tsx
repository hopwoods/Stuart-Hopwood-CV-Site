/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "@emotion/react";
import { style } from "./profile.css";
import { mediaQueries } from "../../style";
import { Email, PhoneNumber, Location } from "../controls";
import { Picture } from "react-responsive-picture";
import { Fade, Bounce } from "react-reveal";
import ProfilePicture200 from "../../images/ProfilePicture-200.png";
import ProfilePicture300 from "../../images/ProfilePicture-300.png";
import ProfilePicture400 from "../../images/ProfilePicture-400.png";
import { AboutText, SocialIcons } from ".";

export const Profile: FunctionComponent = () => {
  return (
    <Fade big>
      <div css={style}>
        <div className="profilePicture">
          <Picture
            sources={[
              {
                srcSet: ProfilePicture200,
                media: mediaQueries.small,
              },
              {
                srcSet: ProfilePicture300,
                media: mediaQueries.medium,
              },
              {
                srcSet: ProfilePicture300,
                media: mediaQueries.large,
              },
              {
                srcSet: ProfilePicture400,
                media: mediaQueries.xlarge,
              },
              {
                srcSet: ProfilePicture400,
                media: mediaQueries.xxlarge,
              },
            ]}
          />
        </div>
        <AboutText />
        <PhoneNumber />
        <Email />
        <Location />
        <Bounce>
          <SocialIcons />
        </Bounce>
      </div>
    </Fade>
  );
};
