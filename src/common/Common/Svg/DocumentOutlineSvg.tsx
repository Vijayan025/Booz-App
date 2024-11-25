import React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';

interface DocumentSvgProps {
  width?: number;
  height?: number;
  color?: string;
}

const DocumentOutlineSvg: React.FC<DocumentSvgProps> = ({
  width = 24,
  height = 24,
  color = 'blue',
}) => (
  <Svg width={width} height={height} fill="none">
    <G clipPath="url(#a)">
      <Path
        fill="#6C7072"
        d="M17 14a1 1 0 0 1-1 1H8a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1Zm-4 3H8a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2Zm9-6.515V19a5.006 5.006 0 0 1-5 5H7a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h4.515a6.958 6.958 0 0 1 4.95 2.05l3.484 3.486A6.949 6.949 0 0 1 22 10.485Zm-6.949-7.021a5.008 5.008 0 0 0-1.05-.78V7a1 1 0 0 0 1 1h4.315a4.98 4.98 0 0 0-.78-1.05L15.05 3.464Zm4.95 7.021c0-.165-.033-.323-.048-.485H15a3 3 0 0 1-3-3V2.047c-.162-.015-.32-.047-.485-.047H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-8.515Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default DocumentOutlineSvg;
