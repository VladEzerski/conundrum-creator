import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

import { SVGRIconProps } from '../../types'

const InformationIcon = ({ width = 24, height = 24 }: SVGRIconProps) => (
  <Svg viewBox="0 0 24 24" width={width} height={height}>
    <Path d="M11.5 3c5.25 0 9.5 4.25 9.5 9.5S16.75 22 11.5 22 2 17.75 2 12.5 6.25 3 11.5 3m0 1C6.81 4 3 7.81 3 12.5c0 4.69 3.81 8.5 8.5 8.5 4.69 0 8.5-3.81 8.5-8.5C20 7.81 16.19 4 11.5 4M11 8v2h1V8h-1m0 4v5h1v-5h-1Z" />
  </Svg>
)
export default InformationIcon
