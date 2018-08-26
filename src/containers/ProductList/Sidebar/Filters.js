import React, { Component } from 'react'
import MultiSelectCheckBox from '../../../components/MultiSelectCheckBox';
import StringUtils from '../../../utils/StringUtils';

/**
 * Sidebar Filters component
 */
export default class Filters extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentFilters: {} //Holds state of the selected filters
    }
  }
  
  /**
   * Calls when there is change in filter,
   * it sets the state and call parent component
   */
  onFilterChange = (name, values) => {
    const {currentFilters} = this.state;
    currentFilters[name.toLowerCase()] = values;
    this.setState({currentFilters}, () => {
      this.props.onFilterChange(this.state.currentFilters);
    })
  }

  /**
   * Render MultiSelectCheckBox component for each filter
   */
  render() {
    const { filters } = this.props;
    return (
      <div className="filters">
        {Array.isArray(filters) && filters.map(filter => {
          return <MultiSelectCheckBox
              key={filter.name}
              className="mscb"
              options={filter.values}
              handleChange={this.onFilterChange}
              heading={StringUtils.capitalizeFirstLetter(filter.name)} />
        })}
      </div>
    )
  }
}
