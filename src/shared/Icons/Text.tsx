import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import { Colors } from "../../utils/colors";

interface Props extends SvgProps {
  size?: number;
}

const TextDoc = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      fill="none"
      viewBox="0 0 24 24"
      stroke={Colors.othersColor}
      width={size}
      height={size}
      {...props}
    >
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </Svg>
  );
};

export default TextDoc;
