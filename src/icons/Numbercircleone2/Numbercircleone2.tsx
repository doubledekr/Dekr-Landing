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

export const Numbercircleone2 = ({
  color = "#F9E1D2",
  className,
}: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="65"
      viewBox="0 0 66 65"
      width="66"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33 56.875C46.4619 56.875 57.375 45.9619 57.375 32.5C57.375 19.0381 46.4619 8.125 33 8.125C19.5381 8.125 8.625 19.0381 8.625 32.5C8.625 45.9619 19.5381 56.875 33 56.875Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />

      <path
        d="M34.0156 44.6875V20.3125L27.9219 24.375"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

Numbercircleone2.propTypes = {
  color: PropTypes.string,
};
