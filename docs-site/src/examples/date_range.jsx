import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'

export default class DateRange extends Component {
  state = {
    startDate: moment('2014-02-08'),
    endDate: moment('2014-02-10')
  };

  handleChange = ({ startDate, endDate }) => {
    startDate = startDate || this.state.startDate
    endDate = endDate || this.state.endDate

    if (startDate.isAfter(endDate)) {
      var temp = startDate
      startDate = endDate
      endDate = temp
    }

    this.setState({ startDate, endDate })
  };

  handleChangeStart = (startDate) => {
    this.handleChange({ startDate })
  };

  handleChangeEnd = (endDate) => {
    this.handleChange({ endDate })
  };

  render() {
    return <div className="row">
      <pre className="column example__code">
        <code className="jsx">
          {'<DatePicker'}<br />
              {'selected={this.state.startDate}'}<br />
              {'selectsStart'}
              {'startDate={this.state.startDate}'}<br />
              {'endDate={this.state.endDate}'}<br />
              {'onChange={this.handleChangeStart} />'}<br />
          {'<DatePicker'}<br />
              {'selected={this.state.endDate}'}<br />
              {'selectsEnd'}
              {'startDate={this.state.startDate}'}<br />
              {'endDate={this.state.endDate}'}<br />
              {'onChange={this.handleChangeEnd} />'}<br />
        </code>
      </pre>
      <div className="column">
        <DatePicker
            selected={this.state.startDate}
            selectsStart
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.handleChangeStart} />
        <DatePicker
            selected={this.state.endDate}
            selectsEnd
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.handleChangeEnd} />
      </div>
    </div>
  }
}
