import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import { Colors } from "../../utils/colors";

interface Props extends SvgProps {
  size?: number;
}

const Geo = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      fill={Colors.locationColor}
      viewBox="0 0 24 24"
      stroke="#fff"
      width={size}
      height={size}
      {...props}
    >
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </Svg>
  );
};

export default Geo;
