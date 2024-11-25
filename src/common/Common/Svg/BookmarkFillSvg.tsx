import React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';

interface BookmarkSvgProps {
  width?: number;
  height?: number;
  color?: string;
}

const BookmarkFillSvg: React.FC<BookmarkSvgProps> = ({
  width = 24,
  height = 24,
  color = 'blue',
}) => (
  <Svg width={width} height={height} fill="none">
    <G clipPath="url(#a)">
      <Path
        fill="#0F0F0F"
        d="M2.849 23.55a2.954 2.954 0 0 0 3.266-.644L12 17.053l5.885 5.853a2.954 2.954 0 0 0 2.1.881 3.05 3.05 0 0 0 1.17-.237A2.953 2.953 0 0 0 23 20.779V5a5.006 5.006 0 0 0-5-5H6a5.006 5.006 0 0 0-5 5v15.779a2.953 2.953 0 0 0 1.849 2.771Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default BookmarkFillSvg;
