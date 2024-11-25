import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface ProfileSvgProps {
  width?: number;
  height?: number;
  color?: string;
}

const ProfileSvg: React.FC<ProfileSvgProps> = ({
  width = 22,
  height = 20,
  color = 'blue',
}) => (
  <Svg width={width} height={height} fill="none">
    <Path
      fill={color}
      fillRule="evenodd"
      d="M10.626 12.513c2.825 0 5.128-2.76 5.128-6.154 0-3.395-2.303-6.154-5.128-6.154-2.826 0-5.129 2.76-5.129 6.154 0 3.395 2.308 6.154 5.129 6.154Zm0-10.77c1.984 0 3.59 2.052 3.59 4.616 0 2.564-1.606 4.615-3.59 4.615-1.985 0-3.59-2.05-3.59-4.615 0-2.564 1.605-4.615 3.59-4.615Z"
      clipRule="evenodd"
    />
    <Path
      fill={color}
      fillRule="evenodd"
      d="M15.318 12a.773.773 0 0 0-.154 1.538 4.995 4.995 0 0 1 4.4 4.616H1.687a5.036 5.036 0 0 1 4.4-4.616A.773.773 0 1 0 5.933 12c-.056 0-5.82.656-5.82 6.918 0 .425.344.77.769.77h19.487a.77.77 0 0 0 .77-.77c0-6.262-5.765-6.918-5.821-6.918Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default ProfileSvg;
