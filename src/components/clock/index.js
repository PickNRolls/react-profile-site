import React from 'react';

import './main.css';

var dateDictionary = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

class Clock extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      date: new Date(),
      day: null,
      hhmm: null
    };
  }

  tick () {
    var date = this.state.date;

    this.setState({
      date: new Date(),
      day: dateDictionary[date.getDay()],
      hhmm: `${date.getHours()}:${date.getMinutes() < 10 ?
        '0' + date.getMinutes() :
        date.getMinutes()}`
    });
  }

  componentDidMount () {
    this.timerID = setInterval(
      () => this.tick(), 1000
    );
  }

  componentWillUnmount () {
    clearInterval(this.timerID);
  }

  render () {
    return (
      <div className={`clock ${this.props.className}`}>
        <span className="clock__day">{this.state.day}</span>,
        <span className="clock__hhmm"> {this.state.hhmm}</span>
      </div>
    );
  }
};

export default Clock;
