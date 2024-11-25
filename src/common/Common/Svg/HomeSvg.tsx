import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface HomeSvgProps {
  width?: number;
  height?: number;
  color?: string;
}

const HomeSvg: React.FC<HomeSvgProps> = ({
  width = 22,
  height = 20,
  color = 'blue',
}) => (
  <Svg width={width} height={height} fill="none">
    <Path
      fill={color}
      fillRule="evenodd"
      d="M20.811 8.154 11.61.347a1.464 1.464 0 0 0-1.893 0L.515 8.154a1.464 1.464 0 0 0 .878 2.576v7.806c0 .809.655 1.464 1.463 1.464H18.47c.809 0 1.464-.655 1.464-1.464v-7.801a1.464 1.464 0 0 0 .878-2.576v-.005ZM10.175 18.54h-.976V14.15h2.928v4.391h-1.952Zm8.294-9.27v9.27H13.59V14.15c0-.808-.655-1.464-1.463-1.464H9.199c-.808 0-1.464.656-1.464 1.464v4.391H2.856v-9.27H1.461l9.202-7.806 9.202 7.806h-1.396Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default HomeSvg;
