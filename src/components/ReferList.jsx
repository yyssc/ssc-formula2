import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import { FormGroup, FormControl } from 'react-bootstrap';

const ReferListShape = PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}));

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
    this.setState({
      value: event.target.value,
    });
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
