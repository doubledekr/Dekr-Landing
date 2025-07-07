/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: string;
  className: any;
}

export const Numbercircletwo3 = ({
  color = "#F9E1D2",
  className,
}: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />

      <path
        d="M19 22.0001H13L18.3962 14.8051C18.6564 14.4596 18.8387 14.0619 18.9307 13.6393C19.0227 13.2167 19.0223 12.7791 18.9294 12.3567C18.8365 11.9343 18.6534 11.537 18.3926 11.1919C18.1318 10.8469 17.7994 10.5624 17.4184 10.3578C17.0373 10.1532 16.6165 10.0334 16.1848 10.0067C15.7531 9.97998 15.3208 10.0469 14.9174 10.2029C14.514 10.3589 14.1491 10.6003 13.8477 10.9105C13.5463 11.2207 13.3155 11.5924 13.1713 12.0001"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

Numbercircletwo3.propTypes = {
  color: PropTypes.string,
};
