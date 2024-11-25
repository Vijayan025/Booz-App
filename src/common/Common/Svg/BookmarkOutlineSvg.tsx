import React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';

interface BookmarkSvgProps {
  width?: number;
  height?: number;
  color?: string;
}

const BookmarkOutlineSvg: React.FC<BookmarkSvgProps> = ({
  width = 24,
  height = 24,
  color = 'blue',
}) => (
  <Svg width={width} height={height} fill="none">
    <G clipPath="url(#a)">
      <Path
        fill="#6C7072"
        d="M20.137 24a2.798 2.798 0 0 1-1.987-.835L12 17.051l-6.15 6.118a2.8 2.8 0 0 1-3.095.609A2.8 2.8 0 0 1 1 21.154V5a5 5 0 0 1 5-5h12a5 5 0 0 1 5 5v16.154a2.8 2.8 0 0 1-1.75 2.624c-.353.147-.731.223-1.113.222ZM6 2a3 3 0 0 0-3 3v16.154a.843.843 0 0 0 1.437.6l6.863-6.821a1 1 0 0 1 1.41 0l6.855 6.819a.843.843 0 0 0 1.437-.6V5a3 3 0 0 0-3-3H6Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default BookmarkOutlineSvg;
