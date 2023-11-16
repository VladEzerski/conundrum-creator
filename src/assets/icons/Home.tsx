import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

import { SVGRIconProps } from '../../types'

const HomeIcon = ({ width = 24, height = 24 }: SVGRIconProps) => (
  <Svg viewBox="0 0 24 24" width={width} height={height}>
    <Path d="m16 8.41-4.5-4.5L4.41 11H6v8h3v-6h5v6h3v-8h1.59L17 9.41V6h-1v2.41M2 12l9.5-9.5L15 6V5h3v4l3 3h-3v8h-5v-6h-3v6H5v-8H2Z" />
  </Svg>
)
export default HomeIcon
