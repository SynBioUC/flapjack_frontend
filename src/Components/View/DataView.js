import React from 'react'
import { Row, Col, Empty } from 'antd'
import Selection from './Selection'
import Plotly from 'plotly.js'
import createPlotlyComponent from 'react-plotly.js/factory'
const Plot = createPlotlyComponent(Plotly)

const DataView = () => {
  const [showPlot, setShowPlot] = React.useState(false)

  const onPlot = values => {
    console.log(values)
    setShowPlot(false)
  }


  return (
    <Row gutter={20}>
      <Col span={6}>
        <Selection onSubmit={onPlot} />
      </Col>
      <Col span={18} style={{ padding: 20 }}>
        {!showPlot && <Empty
          description="Select data to plot"
        />}
        {showPlot && <Plot
          style={{ width: '100%', height: 500 }}
          useResizeHandler
          data={[
            {
              x: [1, 2, 3],
              y: [2, 6, 3],
              type: 'scatter',
              mode: 'lines+markers',
              marker: { color: 'red' },
            },
          ]}
          layout={{ autosize: true, title: 'A Fancy Plot' }}
        />}
      </Col>
    </Row>
  )
}

DataView.propTypes = {}

export default DataView