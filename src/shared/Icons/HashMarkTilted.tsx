import * as React from "react";
import Svg, { Path, Rect, G, SvgProps } from "react-native-svg";

interface Props extends SvgProps {
  size?: number;
  color?: string;
}

const HashMarkTilted = ({ size = 24, color = "white", ...props }: Props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 101 127"
    >
      <G
        id="Group_5774"
        data-name="Group 5774"
        transform="translate(-371 -1455)"
      >
        <Rect
          id="Rectangle_7927"
          data-name="Rectangle 7927"
          width="101"
          height="127"
          transform="translate(371 1455)"
          fill="rgba(255,255,255,0)"
        />
        <G
          id="Group_5773"
          data-name="Group 5773"
          transform="translate(-449.368 1157)"
        >
          <Path
            id="Path_13"
            data-name="Path 13"
            d="M3.417-.334,19,1.5,11.266,71.633-4.362,69.476Z"
            transform="translate(840.219 347.705)"
            fill="#0098d9"
          />
          <Path
            id="Path_15"
            data-name="Path 15"
            d="M7.729,0,23.4,2.372,15.6,59.4,0,57.408Z"
            transform="matrix(0.017, 1, -1, 0.017, 915.089, 369.893)"
            fill="#0098d9"
          />
          <Path
            id="Path_16"
            data-name="Path 16"
            d="M3.326-.616,19,1.756,11.225,71.63l-15.587-1.9Z"
            transform="translate(887.958 303.529)"
            fill="#0098d9"
          />
          <Path
            id="Path_17"
            data-name="Path 17"
            d="M7.883,0,23.259,1.929l-7.63,57.51L0,57.283Z"
            transform="matrix(0.017, 1, -1, 0.017, 886.747, 327.919)"
            fill="#3c3c3c"
          />
          <Path
            id="Path_18"
            data-name="Path 18"
            d="M1.823,0l15.8,2.035L15.629,17.572,0,15.416Z"
            transform="matrix(0.017, 1, -1, 0.017, 840.37, 366.84)"
            fill="#0098d9"
          />
          <Path
            id="Path_19"
            data-name="Path 19"
            d="M1.951,0l15.8,2.035L15.742,17.249,0,15.218Z"
            transform="matrix(0.017, 1, -1, 0.017, 919.357, 338.069)"
            fill="#0098d9"
          />
          <Path
            id="Path_20"
            data-name="Path 20"
            d="M-1.343,20.7l15.585,1.833L11.028,52.8-4.29,51.085Z"
            transform="translate(849.833 279)"
            fill="#3c3c3c"
          />
          <Path
            id="Path_21"
            data-name="Path 21"
            d="M-1.082,20.291,14.3,22.149,11.266,53.155-4.362,51Z"
            transform="translate(882.921 370.002)"
            fill="#0098d9"
          />
        </G>
      </G>
    </Svg>
  );
};

export default HashMarkTilted;
