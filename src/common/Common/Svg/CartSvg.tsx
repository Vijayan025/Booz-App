import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface CartSvgProps {
  width?: number;
  height?: number;
  color?: string;
}

const CartSvg: React.FC<CartSvgProps> = ({
  width = 24,
  height = 20,
  color = 'blue',
}) => (
  <Svg width={width} height={height} fill="none">
    <Path
      fill={color}
      fillRule="evenodd"
      d="M8.455 12.819H18.71c.616 0 1.173-.367 1.415-.934l3.076-7.178a1.538 1.538 0 0 0-1.415-2.143H4.866a1.538 1.538 0 0 0-.83.256L3.01.461A.77.77 0 0 0 2.307 0H.77a.77.77 0 1 0 0 1.538h1.026l4.68 10.696a6.214 6.214 0 0 1-.584 5.2 2.564 2.564 0 1 0 4.912-1.026h5.564a2.564 2.564 0 1 0 2.379-1.539H8.476a1.025 1.025 0 1 1 0-2.05h-.02Zm13.331-8.717L18.71 11.28H7.942L4.866 4.102h16.92ZM9.481 17.433a1.025 1.025 0 1 1-2.051 0 1.025 1.025 0 0 1 2.05 0Zm10.254 0a1.025 1.025 0 1 1-2.05 0 1.025 1.025 0 0 1 2.05 0Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default CartSvg;
