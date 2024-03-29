import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import { Colors } from "../../utils/colors";
interface Props extends SvgProps {
  size?: number;
}

const Link = ({ size = 24, color = "#5E72E4", ...props }: Props) => {
  return (
    <Svg
      fill="none"
      viewBox="0 0 24 24"
      stroke={Colors.urlColor}
      width={size}
      height={size}
      {...props}
    >
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
      />
    </Svg>
  );
};

export default Link;
