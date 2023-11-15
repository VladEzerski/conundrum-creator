import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

import { SVGRIconProps } from '../../types'

const SendIcon = ({ width = 24, height = 24 }: SVGRIconProps) => (
  <Svg viewBox="0 0 24 24" width={width} height={height}>
    <Path d="m2 21 21-9L2 3v7l15 2-15 2v7Z" />
  </Svg>
)
export default SendIcon
