import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

import { SVGRIconProps } from '../../types'

const HistoryIcon = ({ width = 24, height = 24 }: SVGRIconProps) => (
  <Svg viewBox="0 0 24 24" width={width} height={height}>
    <Path d="M3 19c0 1.1.9 2 2 2h6.76c-.47-.53-.76-1.23-.76-2H3m11 2c1.1 0 2-.9 2-2V6c0-.77.29-1.47.76-2H8c-1.1 0-2 .9-2 2v12h6v1c0 1.1.9 2 2 2M5 6c0-1.66 1.34-3 3-3h11c1.66 0 3 1.34 3 3v2h-5v11c0 1.66-1.34 3-3 3H5c-1.66 0-3-1.34-3-3v-1h3V6m16 1V6c0-1.1-.9-2-2-2s-2 .9-2 2v1h4Z" />
  </Svg>
)
export default HistoryIcon
