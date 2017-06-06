import React from 'react';
import { forbidExtraProps } from 'airbnb-prop-types';

import SearchBox from './SearchBox';
import SelectList from './SelectList';
import 档案转换ItemsShape from '../shapes/档案转换ItemsShape';

const propTypes = forbidExtraProps({
  items: 档案转换ItemsShape.isRequired,
});

export const defaultProps = {
};


export default class 档案转换Tab extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
  }

  /**
   *
   *
   * @param {any} nextProps
   *
   * @memberof 档案转换Tab
   */
  componentWillReceiveProps() {
  }

  /**
   *
   *
   * @param {any} nextProps
   * @param {any} nextState
   *
   * @memberof 档案转换Tab
   */
  // shouldComponentUpdate() {
  // }

  /**
   *
   *
   * @param {any} prevProps
   * @param {any} prevState
   *
   * @memberof 档案转换Tab
   */
  componentDidUpdate() {
  }

  render() {
    return (
      <div>
        <SearchBox />
        <SelectList
          items={this.props.items}
        />
      </div>
    );
  }
}

档案转换Tab.propTypes = propTypes;
档案转换Tab.defaultProps = defaultProps;
