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

export const FormatStrokeWeightLight1 = ({
  color = "#474747",
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
        d="M26.9062 21.3281H39.0938L31.9844 31.4844C33.1565 31.4845 34.3104 31.7745 35.3433 32.3285C36.3763 32.8824 37.2562 33.6832 37.9049 34.6594C38.5535 35.6357 38.9507 36.7572 39.0611 37.9241C39.1715 39.091 38.9917 40.2671 38.5377 41.3477C38.0837 42.4283 37.3695 43.3798 36.4588 44.1177C35.548 44.8555 34.469 45.3568 33.3177 45.5768C32.1665 45.7968 30.9787 45.7287 29.86 45.3786C28.7414 45.0286 27.7267 44.4074 26.9062 43.5703"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

FormatStrokeWeightLight1.propTypes = {
  color: PropTypes.string,
};
