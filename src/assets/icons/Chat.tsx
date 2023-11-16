import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

import { SVGRIconProps } from '../../types'

const ChatIcon = ({ width = 24, height = 24 }: SVGRIconProps) => (
  <Svg viewBox="0 0 24 24" width={width} height={height}>
    <Path d="M3 20.59 6.59 17H18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14.59M3 22H2V6c0-1.66 1.34-3 3-3h13c1.66 0 3 1.34 3 3v9c0 1.66-1.34 3-3 3H7l-4 4M6 7h11v1H6V7m0 3h11v1H6v-1m0 3h8v1H6v-1Z" />
  </Svg>
)

export default ChatIcon
