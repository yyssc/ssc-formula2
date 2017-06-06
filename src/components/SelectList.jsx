import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import { Nav, NavItem } from 'react-bootstrap';

const propTypes = forbidExtraProps({
  activeKey: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
});

export const defaultProps = {
  activeKey: null,
};


export default class SelectList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeKey: props.activeKey,
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
  }

  /**
   *
   *
   * @param {any} nextProps
   *
   * @memberof SelectList
   */
  componentWillReceiveProps(nextProps) {
    if (nextProps.activeKey !== this.state.activeKey) {
      this.setState({
        activeKey: nextProps.activeKey,
      });
    }
  }

  /**
   *
   *
   * @param {any} nextProps
   * @param {any} nextState
   *
   * @memberof SelectList
   */
  // shouldComponentUpdate() {
  // }

  /**
   *
   *
   * @param {any} prevProps
   * @param {any} prevState
   *
   * @memberof SelectList
   */
  componentDidUpdate() {
  }

  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }

  render() {
    return (
      <div>
        <Nav
          bsStyle="pills"
          stacked
          activeKey={this.state.activeKey}
          onSelect={this.handleSelect}
        >
          {this.props.items.map(item => (
            <NavItem key={item.id} eventKey={item.id}>
              { `${item.code} / ${item.name}` }
            </NavItem>
          ))}
        </Nav>
      </div>
    );
  }
}

SelectList.propTypes = propTypes;
SelectList.defaultProps = defaultProps;
