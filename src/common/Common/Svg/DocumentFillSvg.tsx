import React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';

interface DocumentSvgProps {
  width?: number;
  height?: number;
  color?: string;
}

const DocumentFillSvg: React.FC<DocumentSvgProps> = ({
  width = 24,
  height = 24,
  color = 'blue',
}) => (
  <Svg width={width} height={height} fill="none">
    <G clipPath="url(#a)">
      <Path
        fill="#0F0F0F"
        d="M14 7V.46c.925.35 1.765.891 2.465 1.59l3.484 3.486A6.953 6.953 0 0 1 21.54 8H15a1 1 0 0 1-1-1Zm8 3.485V19a5.006 5.006 0 0 1-5 5H7a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h4.515c.163 0 .324.013.485.024V7a3 3 0 0 0 3 3h6.976c.011.161.024.322.024.485ZM14 19a1 1 0 0 0-1-1H8a1 1 0 0 0 0 2h5a1 1 0 0 0 1-1Zm3-4a1 1 0 0 0-1-1H8a1 1 0 0 0 0 2h8a1 1 0 0 0 1-1Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default DocumentFillSvg;
