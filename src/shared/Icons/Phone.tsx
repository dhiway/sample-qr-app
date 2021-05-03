import * as React from "react";
import Svg, { Path, SvgProps, G, Rect } from "react-native-svg";
import { Colors } from "../../utils/colors";

interface Props extends SvgProps {
  size?: number;
}

const Phone = ({ size = 24, ...props }: Props) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 54 54.001">
      <G transform="translate(-19)">
        <G transform="translate(19)">
          <G>
            <Path
              fill="#434343"
              fillRule="evenodd"
              d="M100.029 7207.784c-1.667 5.066-8.2 7.592-12.863 7.172-6.372-.576-13.306-3.957-18.569-7.678a61.177 61.177 0 01-19.206-22.918c-2.984-6.35-3.654-14.154.785-19.939a7.629 7.629 0 016.084-3.41c3.7-.18 4.219 1.934 5.49 5.232.947 2.467 2.21 4.98 2.916 7.539 1.321 4.771-3.3 4.967-3.881 8.867-.36 2.461 2.617 5.756 3.964 7.51a36.428 36.428 0 009.388 8.65c2.052 1.293 5.357 3.621 7.7 2.336 3.614-1.98 3.276-8.076 8.327-6.012a81.683 81.683 0 017.65 3.949c3.863 2.078 3.683 4.23 2.21 8.7"
              data-name="call-[#192]"
              transform="translate(-47 -7161)"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
};

export default Phone;
