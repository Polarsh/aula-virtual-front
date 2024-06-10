import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
} from '@mui/x-charts/Gauge'

import { Fragment } from 'react'

function GaugePointer() {
  const { value, valueAngle, outerRadius, cx, cy } = useGaugeState()

  if (valueAngle === null) {
    return null
  }

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  }
  return (
    <g>
      <circle cx={cx} cy={cy} r={5} fill='red' />
      <path
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke='red'
        strokeWidth={3}
      />
      <text x={cx} y={cy + 25} textAnchor='middle'>
        <tspan fontWeight={'bold'} fill='black'>
          {value}%
        </tspan>
      </text>
    </g>
  )
}

export default function GaugeGraphComponent({ value }) {
  return (
    <Fragment>
      <GaugeContainer
        width={200}
        height={200}
        startAngle={-110}
        endAngle={110}
        value={value}>
        <GaugeReferenceArc />
        <GaugeValueArc />
        <GaugePointer />
      </GaugeContainer>
    </Fragment>
  )
}
