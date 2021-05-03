import * as React from "react";
import Svg, { Path, SvgProps, G, Circle } from "react-native-svg";
interface Props extends SvgProps {
  size?: number;
}
const Tick = ({ size = 24, color = "#000", ...props }: Props) => {
  return (
    <Svg width={size} fill={color} height={size} viewBox="0 0 24 24" {...props}>
      <Path d="M20.285 2L9 13.567 3.714 8.556 0 12.272 9 21 24 5.715z" />
    </Svg>
  );
};
export default Tick;
