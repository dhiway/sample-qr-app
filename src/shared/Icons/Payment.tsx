import * as React from "react";
import Svg, { Path, SvgProps, G } from "react-native-svg";

interface Props extends SvgProps {
  size?: number;
}

const Payment = ({ size = 24, ...props }: Props) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 132.303 141.505" {...props}>
      <G data-name="Group 6305" transform="translate(.5 .596)">
        <Path
          fill="#fe9b1e"
          stroke="#fe9b1e"
          strokeWidth="1"
          d="M131.244 23.306l-2.641-.2C98.535 20.752 67.509 1.19 67.22 1.016L65.651 0l-1.567 1.016c-.29.174-31.317 19.736-61.385 22.087l-2.641.2L0 25.947c0 .755-.377 75.084 64.171 113.511l1.48.871 1.48-.871c64.548-38.427 64.171-112.756 64.171-113.511z"
          data-name="Path 12566"
        />
        <G
          fill="#fff"
          data-name="Group 6119"
          transform="translate(36.475 44.722)"
        >
          <Path
            d="M0 0H7.268V29.071H0z"
            data-name="Rectangle 7817"
            transform="rotate(-45 33.08 13.703)"
          />
          <Path
            d="M0 0H7.268V58.142H0z"
            data-name="Rectangle 7818"
            transform="rotate(-134.03 21.08 17.97)"
          />
        </G>
      </G>
    </Svg>
  );
};

export default Payment;
