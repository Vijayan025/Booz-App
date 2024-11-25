import React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';

interface HomeSvgProps {
  width?: number;
  height?: number;
  color?: string;
}

const HomeOutlineSvg: React.FC<HomeSvgProps> = ({
  width = 24,
  height = 24,
  color = 'blue',
}) => (
  <Svg width={width} height={height} fill="none">
    <G clipPath="url(#a)">
      <Path
        fill="#6C7072"
        d="m23.121 9.07-7.585-7.587a5.008 5.008 0 0 0-7.072 0L.88 9.07A2.978 2.978 0 0 0 0 11.19v9.817a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V11.19a2.978 2.978 0 0 0-.879-2.12Zm-8.12 12.937H9v-3.934a3 3 0 0 1 6 0v3.934Zm7-1a1 1 0 0 1-1 1h-4v-3.934a5 5 0 0 0-10 0v3.934H3a1 1 0 0 1-1-1V11.19c0-.265.105-.519.292-.707L9.878 2.9a3.008 3.008 0 0 1 4.244 0l7.585 7.586c.186.187.291.44.293.704v9.817Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default HomeOutlineSvg;
