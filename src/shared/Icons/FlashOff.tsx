import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
interface Props extends SvgProps {
  size?: number;
  color?: string;
}

const FlashOff = ({ size = 24, color = "white", ...props }: Props) => {
  return (
    <Svg viewBox="0 0 20 20" fill={color} width={size} height={size} {...props}>
      <Path
        fillRule="evenodd"
        d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
        clipRule="evenodd"
      />
      <Path d="M1 0 L0 1 L99 100 L100 99" />
    </Svg>
  );
};

export default FlashOff;
