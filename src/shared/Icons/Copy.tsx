import * as React from "react";
import Svg, { Path, SvgProps, G, Rect } from "react-native-svg";

interface Props extends SvgProps {
  size?: number;
}

const Copy = ({ size = 24, ...props }: Props) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 17.89 18" {...props}>
      <G transform="translate(1 1)">
        <G>
          <G
            fill="none"
            stroke="#707070"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <Rect
              width="10.4"
              height="10.4"
              rx="2"
              transform="translate(5.49 5.6)"
            />
            <Path
              fillRule="evenodd"
              d="M2.4 10.4h-.8A1.6 1.6 0 010 8.8V1.6A1.6 1.6 0 011.6 0h7.2a1.6 1.6 0 011.6 1.6v.8"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
};

export default Copy;
