import React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';

interface CommentsSvgProps {
  width?: number;
  height?: number;
  color?: string;
}

const CommentsFillSvg: React.FC<CommentsSvgProps> = ({
  width = 24,
  height = 24,
  color = 'blue',
}) => (
  <Svg width={width} height={height} fill="none">
    <G fill="#0F0F0F" clipPath="url(#a)">
      <Path d="M12 14.992a3 3 0 0 0-3 3v6h6v-6a3 3 0 0 0-3-3Z" />
      <Path d="M17 17.992v6h4a3 3 0 0 0 3-3v-9.12a2 2 0 0 0-.563-1.393l-8.498-9.187a4 4 0 0 0-5.875 0L.581 10.476A2 2 0 0 0 0 11.886v9.106a3 3 0 0 0 3 3h4v-6c.019-2.726 2.22-4.953 4.878-5.017 2.748-.067 5.101 2.198 5.122 5.017Z" />
      <Path d="M12 14.992a3 3 0 0 0-3 3v6h6v-6a3 3 0 0 0-3-3Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default CommentsFillSvg;
