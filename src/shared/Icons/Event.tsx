import * as React from "react";
import Svg, { Path, SvgProps, G } from "react-native-svg";
interface Props extends SvgProps {
  size?: number;
}

const Event = ({ size = 24, ...props }: Props) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 58.95 65.5">
      <G fill="#fe9b1e" data-name="Group 6289">
        <Path
          d="M19.476 6.335h20.118V1.651H19.476zM14.9 1.844v.023a22.513 22.513 0 00-4.635.924v-.018c-.1.044-.194.064-.281.108a1.7 1.7 0 00-.351.128c-.331.108-.663.236-.975.367-.166.064-.331.149-.5.213-.228.108-.475.236-.7.344l-.558.324c-.166.085-.312.192-.478.291a13.415 13.415 0 00-2.34 1.91l-.043.042c-.25.291-.5.56-.725.839l-.042.041a17.352 17.352 0 00-3.25 11.043v1.256h4.537v-1.268c0-5.52 1.759-8.957 5.672-10.717a15.532 15.532 0 014.68-1.166h.042V1.864zm40.788 5.52l-.02-.041a9.924 9.924 0 00-.747-.839L54.9 6.44a14.19 14.19 0 00-2.357-1.909c-.146-.087-.281-.2-.455-.291s-.374-.216-.582-.324-.455-.236-.7-.344c-.143-.064-.312-.149-.494-.213-.317-.131-.624-.259-.952-.367-.124-.041-.228-.085-.351-.128s-.191-.067-.281-.108v.023a22.772 22.772 0 00-4.638-.924V6.5a14.994 14.994 0 014.61 1.161 8.624 8.624 0 014.329 3.952 14.448 14.448 0 011.368 6.765v1.3h4.534v-1.267a17.364 17.364 0 00-3.243-11.047z"
          data-name="Path 12671"
          opacity="0.4"
          transform="translate(0 3.757)"
        />
        <Path
          d="M44.213 2.348v10.321a2.358 2.358 0 01-4.716 0V2.372a2.358 2.358 0 014.716-.035zm-24.759.037v10.3a2.358 2.358 0 11-4.716 0v-10.3a2.358 2.358 0 114.716 0m39.5 21.05v25.4C58.95 59.9 52.765 65.5 40.509 65.5h-22.1C6.185 65.5 0 59.9 0 48.831v-25.4zm-16 23.221a2.748 2.748 0 00-2.727 2.783 2.785 2.785 0 002.727 2.783 2.784 2.784 0 000-5.566zm-13.465-.029a2.8 2.8 0 000 5.6 2.75 2.75 0 002.7-2.812 2.8 2.8 0 00-2.7-2.783zM16 46.628a2.8 2.8 0 000 5.6 2.8 2.8 0 000-5.6zm26.954-11.857a2.784 2.784 0 102.7 2.783 2.725 2.725 0 00-2.7-2.783zm-13.465-.029a2.8 2.8 0 000 5.6 2.75 2.75 0 002.7-2.812 2.78 2.78 0 00-2.7-2.783zm-13.465 0a2.773 2.773 0 00-2.724 2.812 2.7 2.7 0 102.727-2.812z"
          data-name="Path 12672"
        />
      </G>
    </Svg>
  );
};

export default Event;