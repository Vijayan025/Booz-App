import React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';

interface CommentsSvgProps {
  width?: number;
  height?: number;
  color?: string;
}

const CommentsOutlineSvg: React.FC<CommentsSvgProps> = ({
  width = 24,
  height = 24,
  color = 'blue',
}) => (
  <Svg width={width} height={height} fill="none">
    <G clipPath="url(#a)">
      <Path
        fill="#75797B"
        d="M24 16v5a3 3 0 0 1-3 3h-5a7.999 7.999 0 0 1-6.92-4 10.968 10.968 0 0 0 2.242-.248A5.987 5.987 0 0 0 16 22h5a1 1 0 0 0 1-1v-5a5.988 5.988 0 0 0-2.252-4.678c.16-.736.245-1.488.252-2.242A8 8 0 0 1 24 16Zm-6.023-6.349A9 9 0 0 0 8.349.023 9.418 9.418 0 0 0 0 9.294v5.04C0 16.866 1.507 18 3 18h5.7a9.419 9.419 0 0 0 9.277-8.349Zm-4.027-5.6a7.017 7.017 0 0 1 2.032 5.46 7.364 7.364 0 0 1-7.282 6.49H3c-.928 0-1-1.276-1-1.667v-5.04a7.362 7.362 0 0 1 6.49-7.276 7.012 7.012 0 0 1 5.46 2.033Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default CommentsOutlineSvg;
