import * as React from "react";
import Svg, { Path, SvgProps, G, Ellipse } from "react-native-svg";

interface Props extends SvgProps {
  size?: number;
}

const ContactBook = ({ size = 24, ...props }: Props) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 60.626 57.391" {...props}>
      <G data-name="Group 6283" transform="translate(-3 -5)">
        <Path
          fill="#8b8b8b"
          d="M17.043 15.217H6.609A2.465 2.465 0 014 12.609 2.465 2.465 0 016.609 10h10.434a2.465 2.465 0 012.609 2.609 2.465 2.465 0 01-2.609 2.608zm0 13.043H6.609A2.465 2.465 0 014 25.652a2.465 2.465 0 012.609-2.609h10.434a2.465 2.465 0 012.609 2.609 2.465 2.465 0 01-2.609 2.609zm0 13.043H6.609a2.609 2.609 0 110-5.217h10.434a2.609 2.609 0 110 5.217z"
          data-name="Path 12644"
          transform="translate(-1 8.043)"
        />
        <Path
          fill="#25a8e0"
          d="M55.565 5H8.609A2.465 2.465 0 006 7.609v52.173a2.465 2.465 0 002.609 2.609h46.956a2.465 2.465 0 002.609-2.609V7.609A2.465 2.465 0 0055.565 5z"
          data-name="Path 12645"
          transform="translate(5.453)"
        />
        <Ellipse
          cx="7.5"
          cy="8"
          fill="#fff"
          data-name="Ellipse 351"
          rx="7.5"
          ry="8"
          transform="translate(30 17.986)"
        />
        <Path
          fill="#fff"
          d="M24.043 17A12.917 12.917 0 0011 30.043a2.465 2.465 0 002.609 2.609h20.869a2.465 2.465 0 002.609-2.609A12.917 12.917 0 0024.043 17z"
          data-name="Path 12646"
          transform="translate(13.496 19.304)"
        />
      </G>
    </Svg>
  );
};

export default ContactBook;
