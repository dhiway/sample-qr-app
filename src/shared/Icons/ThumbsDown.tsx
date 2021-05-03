import * as React from "react";
import Svg, { Path, SvgProps, G, Circle } from "react-native-svg";

interface Props extends SvgProps {
  size?: number;
}

const ThumbsDown = ({ size = 24, ...props }: Props) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 47 47" {...props}>
      <G data-name="Group 6315" transform="translate(.419)">
        <G
          fill="#fff"
          stroke="#444"
          strokeWidth="2"
          data-name="Ellipse 355"
          transform="translate(-.419)"
        >
          <Circle cx="23.5" cy="23.5" r="23.5" stroke="none" />
          <Circle cx="23.5" cy="23.5" r="22.5" fill="none" />
        </G>
        <Path
          fill="#444"
          d="M0 13.513a3.263 3.263 0 003.3 3.153h3.3a8.706 8.706 0 00-.751 4.655 3.666 3.666 0 003.754 2.853h.15a1.337 1.337 0 001.2-.751l1.5-4.2 4.054-4.054h7.507V1.652h-7.498v1.5a6.417 6.417 0 01-1.8-.9C12.913 1.351 10.36 0 7.958 0c-3.6 0-4.8.45-5.706 1.952a4.366 4.366 0 00-.45 2.1 2.855 2.855 0 00-.9 1.5 3.03 3.03 0 000 1.652A4.8 4.8 0 00.15 9.159a5.6 5.6 0 00.3 1.8A8.69 8.69 0 000 13.513zM20.27 3.9a1.419 1.419 0 011.5 1.5 1.5 1.5 0 11-3 0 1.419 1.419 0 011.5-1.5zM1.952 10.51a1.52 1.52 0 01-.3-1.051 1.741 1.741 0 01.6-1.351l.45-.45-.3-.45a1.081 1.081 0 010-1.051A2.23 2.23 0 013.153 5.1l.45-.45-.3-.6a1.463 1.463 0 01.15-1.35c.3-.6.6-1.051 4.354-1.051 2.1 0 4.5 1.2 6.156 2.1a6.439 6.439 0 002.552.9v9.009h-.15a2.134 2.134 0 00-.9.3l-4.2 4.2c-.15.15-.15.3-.3.45l-1.5 4.054a2 2 0 01-2.1-1.652 8.732 8.732 0 01.9-4.2 1.183 1.183 0 00-1.2-1.652H3.3c-.15 0-1.8-.3-1.8-1.652a3.158 3.158 0 01.45-1.8l.45-.6-.45-.6z"
          data-name="Path 12681"
          transform="translate(12.552 11.606)"
        />
      </G>
    </Svg>
  );
};

export default ThumbsDown;
