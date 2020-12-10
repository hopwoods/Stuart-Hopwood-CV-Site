/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "moment-timezone";

function App() {
  const main = css`
    grid-column: 1 / span 1;
  `;

  return (
    <React.Fragment>
      <div css={main}>
        <h3>Welcome to the Stuart Hopwood Photography Asset Database</h3>
        <p>
          Below you can find a list of all your Photography Gear, how much it
          worth, and how much you paid.
          <br />
          You also find serial numbers for items that have them which will be
          usefult for insurance purposes.
          <br />
          Click the <FontAwesomeIcon icon={["fas", "plus"]} /> button to add a
          new asset to the database.
        </p>
      </div>
    </React.Fragment>
  );
}

export default App;
