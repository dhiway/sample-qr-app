import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface Props extends SvgProps {
  size?: number;
}

const Close = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={size}
      height={size}
      fill={"#707070"}
      data-name="Group 6105"
      viewBox="0 0 33.466 33.466"
      {...props}
    >
      <Path fill="none" d="M0 0h33.466v33.466H0z" data-name="Path 12563" />
      <Path
        d="M24.522 6.966L22.556 5l-7.795 7.795L6.966 5 5 6.966l7.795 7.795L5 22.556l1.966 1.966 7.795-7.795 7.795 7.795 1.966-1.966-7.795-7.795z"
        data-name="Path 12564"
        transform="translate(1.972 1.972)"
      />
    </Svg>
  );
};

export default Close;
