import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

import { SVGRIconProps } from '../../types'

const ImageChatIcon = ({ width = 24, height = 24 }: SVGRIconProps) => (
  <Svg viewBox="0 0 24 24" width={width} height={height}>
    <Path d="M3 20.59 6.59 17H18c1.1 0 2-.9 2-2v-.09l-5.21-5.2-5 5-2.5-2.5L3 16.5v4.09M20 6c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v9.09l4.29-4.3 2.5 2.5 5-5L20 13.5V6M3 22H2V6c0-1.66 1.34-3 3-3h13c1.66 0 3 1.34 3 3v9c0 1.66-1.34 3-3 3H7l-4 4M9 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 1c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1Z" />
  </Svg>
)
export default ImageChatIcon
