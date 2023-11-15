import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

import { SVGRIconProps } from '../../types'

const ChatIcon = ({ width = 24, height = 24 }: SVGRIconProps) => (
  <Svg viewBox="0 0 24 24" width={width} height={height}>
    <Path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M6 9h12v2H6m8 3H6v-2h8m4-4H6V6h12" />
  </Svg>
)

export default ChatIcon
