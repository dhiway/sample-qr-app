import * as React from "react";
import Svg, { Path, SvgProps, G } from "react-native-svg";

interface Props extends SvgProps {
  size?: number;
}

const UnsafeSSL = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={size}
      height={size}
      fill={"#000"}
      data-name="Group 6129"
      viewBox="0 0 38.697 36"
      {...props}
    >
      <Path
        d="M10.552 11.2a5.427 5.427 0 015.327-5.521 5.427 5.427 0 015.327 5.521v3.681h3.552V11.2A9.045 9.045 0 0015.879 2 9.045 9.045 0 007 11.2v3.681h3.552z"
        data-name="Path 12575"
        transform="translate(13.94 -2)"
      />
      <Path
        d="M12.84 22.2A1.84 1.84 0 0111 20.362V14.84a1.84 1.84 0 113.681 0v5.521a1.84 1.84 0 01-1.839 1.84z"
        data-name="Path 12576"
        transform="translate(1.56 6.652)"
      />
      <Path
        fill="#e50000"
        d="M27.4 9h-18A5.462 5.462 0 004 14.521V27.4a5.462 5.462 0 005.4 5.521h18a5.462 5.462 0 005.4-5.521V14.521A5.462 5.462 0 0027.4 9zm-7.2 14.723a1.82 1.82 0 01-1.8 1.84 1.82 1.82 0 01-1.8-1.839V18.2a1.8 1.8 0 113.6 0z"
        data-name="Path 12577"
        transform="translate(-4 3.075)"
      />
    </Svg>
  );
};

export default UnsafeSSL;
