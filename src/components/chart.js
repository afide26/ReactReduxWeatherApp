import React, {Component} from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots,SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash'

function average(data){
  return _.round(_.sum(data)/data.length)
}
export default (props) => {
  return(
    <div id="chart">
      <div id="chart-avg">{average(props.data)} {props.units}</div>
      <Sparklines data={props.data} height={120} width={180} >
        <SparklinesLine color={props.color} style={{ strokeWidth: 2, fill: "none" }}/>
        <SparklinesSpots size={2}
        style={{ stroke: "#000", strokeWidth: 2, fill: "white" }} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
    </div>
  )
}
