import React from 'react';
import ExampleAreachart from './example1';
import ExampleLinechart from './exaplelc';
import ExamplePiechart from './exaplepc';

// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class ReactVizNerdlet extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  decrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };
  
  render() {
    return (
      <div>
           <h2>Line Chart</h2>
        <ExampleLinechart />
        <h2>Pie chart</h2>
        <ExamplePiechart />
        <h2>Area Chart</h2>
        <ExampleAreachart />
      </div>
    )
  }
}
