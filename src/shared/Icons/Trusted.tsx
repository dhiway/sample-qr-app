import * as React from "react";
import Svg, { Path, SvgProps, G } from "react-native-svg";

interface Props extends SvgProps {
  size?: number;
}

const Trusted = ({ size = 24, ...props }: Props) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 127.761 136.651" {...props}>
      <G data-name="Group 6121" transform="translate(.5 .596)">
        <Path
          fill="#1ea15d"
          stroke="#00bc07"
          strokeWidth="1"
          d="M126.705 22.5l-2.55-.2C95.127 20.034 65.174 1.149 64.894.981L63.381 0l-1.513.981c-.28.168-30.233 19.053-59.262 21.323l-2.55.2L0 25.054c0 .729-.364 72.487 61.952 109.585l1.429.841 1.429-.841c62.316-37.1 61.952-108.857 61.952-109.585z"
          data-name="Path 12566"
        />
        <G
          fill="#fff"
          data-name="Group 6119"
          transform="translate(35.214 43.175)"
        >
          <Path
            d="M0 0H7.016V28.066H0z"
            data-name="Rectangle 7817"
            transform="rotate(-45 31.936 13.229)"
          />
          <Path
            d="M0 0H7.016V56.131H0z"
            data-name="Rectangle 7818"
            transform="rotate(-134.03 20.351 17.349)"
          />
        </G>
      </G>
    </Svg>
  );
};

export default Trusted;
