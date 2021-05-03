import * as React from "react";
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  G,
  Path,
  SvgProps,
} from "react-native-svg";

interface Props extends SvgProps {
  size?: number;
  color?: string;
}

function HashMarkLogo({ size = 24, color = "white", ...props }: Props) {
  return (
    <Svg
      data-name="Group 6631"
      width={size}
      height={size}
      viewBox="0 0 411.573 411.785"
    >
      <Defs>
        <LinearGradient
          id="b"
          y1={0.5}
          x2={1}
          y2={0.5}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} />
          <Stop offset={0.092} stopColor="#00070a" stopOpacity={0.918} />
          <Stop offset={0.247} stopColor="#011924" stopOpacity={0.78} />
          <Stop offset={0.29} stopColor="#011f2d" stopOpacity={0.741} />
          <Stop offset={0.4} stopColor="#01334a" stopOpacity={0.627} />
          <Stop offset={0.588} stopColor="#025175" stopOpacity={0.427} />
          <Stop offset={0.758} stopColor="#026694" stopOpacity={0.251} />
          <Stop offset={0.901} stopColor="#0273a7" stopOpacity={0.102} />
          <Stop offset={1} stopColor="#0278ae" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="c"
          x1={0.071}
          y1={0.5}
          x2={1.109}
          y2={0.5}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} />
          <Stop offset={0.104} stopColor="#00070a" stopOpacity={0.918} />
          <Stop offset={0.278} stopColor="#011924" stopOpacity={0.78} />
          <Stop offset={0.328} stopColor="#011f2d" stopOpacity={0.741} />
          <Stop offset={0.432} stopColor="#01334a" stopOpacity={0.627} />
          <Stop offset={0.61} stopColor="#025175" stopOpacity={0.427} />
          <Stop offset={0.771} stopColor="#026694" stopOpacity={0.251} />
          <Stop offset={0.906} stopColor="#0273a7" stopOpacity={0.102} />
          <Stop offset={1} stopColor="#0278ae" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="a"
          x1={0.585}
          y1={-0.008}
          x2={0.443}
          y2={0.793}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} />
          <Stop offset={0.092} stopColor="#00070a" stopOpacity={0.918} />
          <Stop offset={0.247} stopColor="#011924" stopOpacity={0.78} />
          <Stop offset={0.29} stopColor="#011f2d" stopOpacity={0.741} />
          <Stop offset={0.348} stopColor="#052f42" stopOpacity={0.678} />
          <Stop offset={0.513} stopColor="#115979" stopOpacity={0.506} />
          <Stop offset={0.667} stopColor="#1b7ba5" stopOpacity={0.349} />
          <Stop offset={0.804} stopColor="#2193c4" stopOpacity={0.204} />
          <Stop offset={0.92} stopColor="#26a2d7" stopOpacity={0.082} />
          <Stop offset={1} stopColor="#27a7de" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="d"
          x1={0.576}
          y1={-0.029}
          x2={0.448}
          y2={0.874}
          xlinkHref="#a"
        />
      </Defs>
      <G data-name="Group 6629">
        <G data-name="Group 6626" fill="#27a7de">
          <Path
            data-name="Path 54549"
            d="M413.889 962.146h88.342l-16.137 86.259-16.5 88.351-13.891 74.3h-88.339l13.884-74.3 16.511-88.351z"
            transform="translate(35.854) translate(-367.364 -799.496)"
          />
          <Path
            data-name="Path 54550"
            d="M529.355 807.921l-13.885 74.291h-88.351L441 807.921z"
            transform="translate(35.854) translate(-364.1 -807.921)"
          />
          <Path
            data-name="Path 54551"
            d="M546.792 1127.711h88.365l-13.891 74.3h-88.357z"
            transform="translate(35.854) translate(-358.321 -790.452)"
          />
          <Path
            data-name="Path 54552"
            d="M696.6 807.921l-13.883 74.291-16.511 88.359-16.121 86.259h-88.362l16.129-86.259 16.5-88.359 13.891-74.291z"
            transform="translate(35.854) translate(-356.746 -807.921)"
          />
        </G>
        <G data-name="Group 6627" fill="#27a7de">
          <Path
            data-name="Path 54553"
            d="M455.562 1219.7H367.2l76.918-411.579h88.343z"
            transform="translate(35.678 .206) translate(-367.197 -808.116)"
          />
          <Path
            data-name="Path 54554"
            d="M621.107 1219.7h-88.358l76.911-411.584h88.35z"
            transform="translate(35.678 .206) translate(-358.153 -808.116)"
          />
        </G>
        <G data-name="Group 6628" fill="#0278ae">
          <Path
            data-name="Path 54555"
            d="M333.367 878.364h98.874l-16.495 88.359h-82.379z"
            transform="translate(0 74.291) translate(-333.367 -878.364)"
          />
          <Path
            data-name="Path 54556"
            d="M736.1 878.364v88.359H495.245l16.5-88.359z"
            transform="translate(0 74.291) translate(-324.524 -878.364)"
          />
          <Path
            data-name="Path 54557"
            d="M574.2 1043.937l-16.505 88.351H333.367v-88.351z"
            transform="translate(0 74.291) translate(-333.367 -869.319)"
          />
          <Path
            data-name="Path 54558"
            d="M728.743 1043.937v88.351h-98.882l16.5-88.351z"
            transform="translate(0 74.291) translate(-317.17 -869.319)"
          />
        </G>
        <Path
          data-name="Path 54559"
          d="M511.749 878.364l-16.5 88.359H560l5.351-88.359z"
          transform="translate(-324.524 -804.073)"
          opacity={0.5}
          fill="url(#b)"
        />
        <Path
          data-name="Path 54560"
          d="M646.366 1043.937l-16.5 88.351h66.858l4.616-88.351z"
          transform="translate(-317.17 -795.028)"
          opacity={0.5}
          fill="url(#c)"
        />
        <Path
          data-name="Path 54561"
          d="M564.77 1030.573l87.272 5.76 13.87-74.187h-88.227z"
          transform="translate(-320.726 -799.496)"
          opacity={0.4}
          fill="url(#a)"
        />
        <Path
          data-name="Path 54562"
          d="M370.05 1186.181h88.469l10.97-58.47h-88.226z"
          transform="translate(-331.363 -790.452)"
          opacity={0.4}
          fill="url(#d)"
        />
      </G>
      <G data-name="Group 6630">
        <Path
          data-name="Rectangle 203"
          fill="#27a7de"
          transform="translate(383.702 383.915)"
          d="M0 0H27.871V27.87H0z"
        />
      </G>
      <Path
        data-name="Rectangle 204"
        fill="#0278ae"
        d="M0 0H27.871V27.871H0z"
      />
    </Svg>
  );
}

export default HashMarkLogo;
