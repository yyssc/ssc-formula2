/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';

import ReferListShape from '../shapes/ReferListShape';

const propTypes = forbidExtraProps({
  items: ReferListShape,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
});

export const defaultProps = {
  items: [],
  onChange: () => {},
  placeholder: '',
  value: '',
};

export default class ReferList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
  }

  /**
   * @param {any} nextProps
   * @memberof ReferList
   */
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.value) {
      this.setState({
        value: nextProps.value,
      });
    }
  }

  /**
   * @param {any} nextProps
   * @param {any} nextState
   * @memberof ReferList
   */
  // shouldComponentUpdate() {
  // }

  /**
   * @param {any} prevProps
   * @param {any} prevState
   * @memberof ReferList
   */
  componentDidUpdate() {
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ value });
    this.props.onChange(value);
  }

  render() {
    return (
      <FormGroup>
        <FormControl
          componentClass="select"
          placeholder={this.props.placeholder}
          value={this.state.value}
          onChange={this.handleChange}
        >
          {
            this.props.items.map(item => (
              <option key={item.id} value={item.id}>{item.name}</option>
            ))
          }
        </FormControl>
      </FormGroup>
    );
  }
}

ReferList.propTypes = propTypes;
ReferList.defaultProps = defaultProps;
