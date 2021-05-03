import * as React from "react";
import Svg, { Path, SvgProps, G } from "react-native-svg";

interface Props extends SvgProps {
  size?: number;
}

const Info = ({ size = 24, ...props }: Props) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 39 39" {...props}>
      <Path
        fill="#acacac"
        d="M21.5 2A19.5 19.5 0 112 21.5 19.5 19.5 0 0121.5 2zm0 3.25A16.25 16.25 0 1037.75 21.5 16.25 16.25 0 0021.5 5.25zm0 24.375a2.437 2.437 0 11-2.437 2.437 2.437 2.437 0 012.437-2.437zm0-19.5a6.5 6.5 0 016.5 6.5c0 2.374-.688 3.7-2.45 5.551l-.858.876c-1.227 1.279-1.566 1.968-1.566 3.323a1.625 1.625 0 11-3.25 0c0-2.374.688-3.7 2.45-5.551l.858-.876c1.227-1.279 1.566-1.968 1.566-3.323a3.25 3.25 0 10-6.5 0 1.625 1.625 0 01-3.25 0 6.5 6.5 0 016.5-6.5z"
        data-name="Path 12568"
        transform="translate(-2 -2)"
      />
    </Svg>
  );
};

export default Info;
