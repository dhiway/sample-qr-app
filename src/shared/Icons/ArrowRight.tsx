import * as React from "react";
import Svg, { Path, SvgProps, G, Circle } from "react-native-svg";
import { Colors } from "../../utils/colors";

interface Props extends SvgProps {
  size?: number;
}

const ArrowRight = ({ size = 24, ...props }: Props) => {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" {...props}>
      <G data-name="Group 6310">
        <G data-name="Ellipse 353" fill="#f2f2f2" stroke="#ededed">
          <Circle cx={10} cy={10} r={10} stroke="none" />
          <Circle cx={10} cy={10} r={9.5} fill="none" />
        </G>
        <G data-name="Group 6308" fill="none" stroke="#707070">
          <Path data-name="Line 58" d="M7.5 4.5l6 5" />
          <Path data-name="Line 59" d="M7.5 14.5l6-5" />
        </G>
      </G>
    </Svg>
  );
};

export default ArrowRight;
