import React from "react"
import { ChartKey, GradientKeyItem, scaleDataToColorTheme } from "../chart-key"
import { lightDarkBlueTheme } from "../utilities"
import { Pair } from "../utilities/chartTypes"

export default function BubbleKey(props: { dataMaxMin: Pair<number>; title: string }) {
  const { dataMaxMin, title } = props
  const colorScale = scaleDataToColorTheme(0, 1000)

  const dataMinMaxKey = (
    <GradientKeyItem
      symbol="circle"
      colorTheme={lightDarkBlueTheme}
      colorScale={colorScale}
      range={[0, 1000]}
      lowLabel={dataMaxMin[0] + ""}
      highLabel={dataMaxMin[1] + ""}
      title={title}
    />
  )
  const chartKeyElements: JSX.Element[] = [dataMinMaxKey]

  return <ChartKey title={title} position={"right"} entries={chartKeyElements} />
}
