import * as React from "react";
import Svg, { Path, SvgProps, G } from "react-native-svg";

interface Props extends SvgProps {
  size?: number;
}

const Risk = ({ size = 24, ...props }: Props) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 127.761 136.651" {...props}>
      <G data-name="Group 6344" transform="translate(.5 .596)">
        <G data-name="Group 6121">
          <Path
            fill="#ff4343"
            stroke="#ff3e3e"
            strokeWidth="1"
            d="M126.705 22.5l-2.55-.2C95.127 20.034 65.174 1.149 64.894.981L63.381 0l-1.513.981c-.28.168-30.233 19.053-59.262 21.323l-2.55.2L0 25.054c0 .729-.364 72.487 61.952 109.585l1.429.841 1.429-.841c62.316-37.1 61.952-108.857 61.952-109.585z"
            data-name="Path 12566"
          />
        </G>
        <G data-name="Group 6343" transform="translate(21.049 21.049)">
          <Path
            fill="#fff"
            d="M59.473 15l-5-5-19.737 19.736L15 10l-5 5 19.736 19.736L10 54.472l5 5 19.736-19.735 19.736 19.736 5-5-19.735-19.737z"
            data-name="Path 12683"
            transform="translate(7.669 7.669)"
          />
          <Path fill="none" d="M0 0h84.81v84.81H0z" data-name="Path 12684" />
        </G>
      </G>
    </Svg>
  );
};

export default Risk;
