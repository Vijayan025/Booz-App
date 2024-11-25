import React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';

interface BellSvgProps {
  width?: number;
  height?: number;
  color?: string;
}

const BellFillSvg: React.FC<BellSvgProps> = ({
  width = 24,
  height = 24,
  color = 'blue',
}) => (
  <Svg width={width} height={height} fill="none">
    <G fill="#0F0F0F" clipPath="url(#a)">
      <Path d="M7.424 21a4.99 4.99 0 0 0 9.152 0H7.424ZM22.392 12.55l-1.736-5.724A9.322 9.322 0 0 0 2.58 7.28l-1.348 5.537A5 5 0 0 0 6.09 19h11.517a5 5 0 0 0 4.785-6.45Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default BellFillSvg;
