import * as React from "react";
import Svg, { Path, SvgProps, G } from "react-native-svg";

interface Props extends SvgProps {
  size?: number;
}

const Google = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={size}
      height={size}
      data-name="Group 6368"
      viewBox="0 0 37 37"
      {...props}
    >
      <Path
        fill="#fbbb00"
        d="M8.2 150.636l-1.288 4.808-4.707.1a18.532 18.532 0 01-.136-17.275l4.191.768L8.1 143.2a11.041 11.041 0 00.1 7.434z"
        data-name="Path 12692"
        transform="translate(0 -128.276)"
      />
      <Path
        fill="#518ef8"
        d="M279.4 208.176a18.493 18.493 0 01-6.595 17.883l-5.279-.269-.747-4.664a11.026 11.026 0 004.744-5.63h-9.892v-7.319H279.4z"
        data-name="Path 12693"
        transform="translate(-242.721 -193.132)"
      />
      <Path
        fill="#28b446"
        d="M58.385 319.975a18.506 18.506 0 01-27.877-5.66l6-4.908a11 11 0 0015.855 5.633z"
        data-name="Path 12694"
        transform="translate(-28.304 -287.049)"
      />
      <Path
        fill="#f14336"
        d="M56.864 4.259l-5.993 4.907a11 11 0 00-16.219 5.76l-6.027-4.934a18.5 18.5 0 0128.24-5.733z"
        data-name="Path 12695"
        transform="translate(-26.555)"
      />
    </Svg>
  );
};

export default Google;
