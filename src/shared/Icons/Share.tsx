import * as React from "react";
import Svg, { Path, SvgProps, G } from "react-native-svg";

interface Props extends SvgProps {
  size?: number;
}

const Share = ({ size = 24, ...props }: Props) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 12.8 16" {...props}>
      <Path
        fill="#707070"
        d="M7.6 10.4h1.6V3.2h1.6L8.4 0 6 3.2h1.6zM14 5.6h-2.4v1.6h1.6v7.2H3.6V7.2h1.6V5.6H2.8a.8.8 0 00-.8.8v8.8a.8.8 0 00.8.8H14a.8.8 0 00.8-.8V6.4a.8.8 0 00-.8-.8z"
        data-name="Path 12592"
        transform="translate(-2)"
      />
    </Svg>
  );
};

export default Share;
