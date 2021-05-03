import * as React from "react";
import Svg, { Path, SvgProps, Circle } from "react-native-svg";

interface Props extends SvgProps {
  size?: number;
}

const Instruction = ({ size = 24, color = "#000", ...props }: Props) => {
  return (
    <Svg
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 128 128"
      {...props}
    >
      <Path d="M64 122c32 0 58-26 58-58S96 6 64 6 6 32 6 64s26 58 58 58zm0-110c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52z" />
      <Circle cx="64" cy="39" r="9" />
      <Path d="M64 101c5 0 9-4 9-9V68c0-5-4-9-9-9s-9 4-9 9v24c0 5 4 9 9 9z" />
    </Svg>
  );
};

export default Instruction;
