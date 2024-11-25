import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface ProfileSvgProps {
  width?: number;
  height?: number;
  color?: string;
}

const ProfileOutlineSvg: React.FC<ProfileSvgProps> = ({
  width = 24,
  height = 24,
}) => (
  <Svg width={width} height={height} fill="none">
    <Path
      fill="#6C7072"
      fillRule="evenodd"
      d="M2.023 20c-.382 1.333-.023 4 9.904 4s10.29-2.667 9.9-4c-1.566-3.56-4.955-5.998-10.005-5.998C7.035 14 3.638 16.425 2.037 19.97l-.014.03Zm9.904-4c-3.533 0-6.149 1.588-7.606 4-.44.667.48 2 7.68 2 7.2 0 8.138-1.333 7.708-2-1.44-2.412-4.066-4-7.782-4ZM12 12a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default ProfileOutlineSvg;
