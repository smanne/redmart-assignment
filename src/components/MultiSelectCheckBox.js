import React, { Component } from 'react'

/**
 * MultiSelect Checkbox component.
 */
export default class MultiSelectCheckBox extends Component {

  constructor(props) {
      super(props);
      this.state = {
          value: [],
      }
  }

  handleChange = (e) => {
    let value = this.state.value;
    if (e.currentTarget.checked) {
        value.push(e.currentTarget.value);
    } else {
        value.splice(value.indexOf(e.currentTarget.value), 1);
    }
    this.setState({value})
    this.props.handleChange(this.props.heading, this.state.value);
  }

  renderOption(option) {
      return <div key={option} className="mscb_option">
          <input type="checkbox" value={option} className="mscb_optionCheckBox" checked={this.state.value.indexOf(option) > -1} onChange={this.handleChange} />
          <span>{option}</span>
      </div>
  }

  render() {
    const {heading, options, className} = this.props
    return (
      <div className={className}>
        <div className="mscb_label">
            {heading}
        </div>
        <div className="mscb_options">
            {options && options.map(option => {
                return this.renderOption(option)
            })}
        </div>
      </div>
    )
  }
}
