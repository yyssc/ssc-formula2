/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

import 档案转换ItemsShape from '../shapes/档案转换ItemsShape';

const propTypes = forbidExtraProps({
  activeKey: PropTypes.string,
  /**
   * [{ id:'', code:'', name: '' }]
   */
  items: 档案转换ItemsShape.isRequired,
  /**
   * 参数1： itemObj，比如
   * ```js
   * {
   *   id: '',
   *   code: '',
   *   name: '',
   *   classtype1: {},
   * }
   * ```
   */
  onSelect: PropTypes.func.isRequired,
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

  getItemById(id) {
    return this.props.items.find(item => item.id === id);
  }

  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
    this.props.onSelect(this.getItemById(eventKey));
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
