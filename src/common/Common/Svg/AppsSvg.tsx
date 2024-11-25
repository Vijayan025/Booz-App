import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface AppsSvgProps {
  width?: number;
  height?: number;
  color?: string;
}

const AppsSvg: React.FC<AppsSvgProps> = ({
  width = 22,
  height = 20,
  color = 'blue',
}) => (
  <Svg width={width} height={height} fill="none">
    <Path
      fill={color}
      fillRule="evenodd"
      d="M4.52.186H1.73C.96.186.335.811.335 1.581v2.791c0 .77.625 1.395 1.395 1.395h2.79c.772 0 1.396-.624 1.396-1.395v-2.79C5.916.81 5.292.185 4.521.185Zm0 4.186H1.73v-2.79h2.79v2.79ZM11.498.186H8.707c-.77 0-1.395.625-1.395 1.395v2.791c0 .77.624 1.395 1.395 1.395h2.79c.771 0 1.396-.624 1.396-1.395v-2.79c0-.771-.625-1.396-1.395-1.396Zm0 4.186H8.707v-2.79h2.79v2.79ZM18.474.186h-2.79c-.771 0-1.396.625-1.396 1.395v2.791c0 .77.625 1.395 1.396 1.395h2.79c.771 0 1.396-.624 1.396-1.395v-2.79c0-.771-.625-1.396-1.396-1.396Zm0 4.186h-2.79v-2.79h2.79v2.79ZM4.52 7.163H1.73c-.77 0-1.395.624-1.395 1.395v2.79c0 .771.625 1.396 1.395 1.396h2.79c.772 0 1.396-.624 1.396-1.395v-2.79c0-.771-.624-1.396-1.395-1.396Zm0 4.186H1.73v-2.79h2.79v2.79ZM11.498 7.163H8.707c-.77 0-1.395.624-1.395 1.395v2.79c0 .771.624 1.396 1.395 1.396h2.79c.771 0 1.396-.624 1.396-1.395v-2.79c0-.771-.625-1.396-1.395-1.396Zm0 4.186H8.707v-2.79h2.79v2.79ZM18.474 7.163h-2.79c-.771 0-1.396.624-1.396 1.395v2.79c0 .771.625 1.396 1.396 1.396h2.79c.771 0 1.396-.624 1.396-1.395v-2.79c0-.771-.625-1.396-1.396-1.396Zm0 4.186h-2.79v-2.79h2.79v2.79ZM4.52 14.14H1.73c-.77 0-1.395.624-1.395 1.395v2.79c0 .771.625 1.396 1.395 1.396h2.79c.772 0 1.396-.625 1.396-1.395v-2.791c0-.77-.624-1.396-1.395-1.396Zm0 4.186H1.73v-2.791h2.79v2.79ZM18.474 14.14h-2.79c-.771 0-1.396.624-1.396 1.395v2.79c0 .771.625 1.396 1.396 1.396h2.79c.771 0 1.396-.625 1.396-1.395v-2.791c0-.77-.625-1.396-1.396-1.396Zm0 4.186h-2.79v-2.791h2.79v2.79ZM11.498 14.14H8.707c-.77 0-1.395.624-1.395 1.395v2.79c0 .771.624 1.396 1.395 1.396h2.79c.771 0 1.396-.625 1.396-1.395v-2.791c0-.77-.625-1.396-1.395-1.396Zm0 4.186H8.707v-2.791h2.79v2.79Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default AppsSvg;
