import * as React from "react";
import Svg, { Path, SvgProps, G } from "react-native-svg";

interface Props extends SvgProps {
  size?: number;
}

const NoInternet = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={size}
      height={size}
      fill="#000"
      data-name="Group 6080"
      viewBox="0 0 114.368 114.368"
      {...props}
    >
      <Path fill="none" d="M0 0h114.368v114.368H0z" data-name="Path 12549" />
      <Path
        d="M111.657 29.361A91.95 91.95 0 0056.189 10.3a87.826 87.826 0 00-19.776 2.287l49.225 49.179 26.019-32.4zM14.611 2.89L8.535 8.966l9.793 9.793A87.906 87.906 0 00.72 29.385l55.421 69.05.048.024.048-.048 18.585-23.16 15.8 15.8 6.076-6.076L14.611 2.89z"
        data-name="Path 12550"
        transform="translate(.996 3.996)"
      />
    </Svg>
  );
};

export default NoInternet;
