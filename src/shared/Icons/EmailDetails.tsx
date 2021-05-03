import * as React from "react";
import Svg, { Path, SvgProps, G } from "react-native-svg";

interface Props extends SvgProps {
  size?: number;
}

const EmailDetails = ({ size = 24, ...props }: Props) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 58.634 58.573" {...props}>
      <G data-name="Group 6284" transform="translate(-.529 -17.47)">
        <Path
          fill="rgba(1,136,209,0.98)"
          d="M29.744 17.473a2.094 2.094 0 00-1.175.433L1.349 38.773a2.094 2.094 0 00-.819 1.669v29.309a6.318 6.318 0 006.276 6.291h46.078a6.318 6.318 0 006.276-6.291V40.443a2.094 2.094 0 00-.819-1.669L31.12 17.906a2.094 2.094 0 00-1.376-.433z"
          data-name="Path 12647"
        />
        <Path
          fill="#0178be"
          d="M4.233 17.471v58.57h23.043a6.318 6.318 0 006.274-6.294V40.439a2.094 2.094 0 00-.818-1.669L5.509 17.9a2.094 2.094 0 00-1.276-.434z"
          data-name="Path 12648"
          transform="translate(25.611 .002)"
        />
        <Path
          fill="#c8d4dd"
          d="M29.844 17.471h-.1a2.094 2.094 0 00-1.178.434L1.35 38.771a2.094 2.094 0 000 3.325L28.568 63.04a2.094 2.094 0 001.276.429z"
          data-name="Path 12649"
          transform="translate(0 .002)"
        />
        <Path
          fill="#aebdc0"
          d="M4.233 17.471v46a2.094 2.094 0 001.276-.429L32.731 42.1a2.094 2.094 0 000-3.325L5.509 17.9a2.094 2.094 0 00-1.276-.434z"
          data-name="Path 12650"
          transform="translate(25.611 .002)"
        />
      </G>
    </Svg>
  );
};

export default EmailDetails;
