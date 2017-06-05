import React from 'react';
import { forbidExtraProps } from 'airbnb-prop-types';

import SearchBox from './SearchBox';

const propTypes = forbidExtraProps({
});

export const defaultProps = {
};


export default class DanJuZiDuan extends React.Component {
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
   * @memberof DanJuZiDuan
   */
  componentWillReceiveProps() {
  }

  /**
   *
   *
   * @param {any} nextProps
   * @param {any} nextState
   *
   * @memberof DanJuZiDuan
   */
  // shouldComponentUpdate() {
  // }

  /**
   *
   *
   * @param {any} prevProps
   * @param {any} prevState
   *
   * @memberof DanJuZiDuan
   */
  componentDidUpdate() {
  }

  render() {
    return (
      <div>
        <span>定位</span><SearchBox />
      </div>
    );
  }
}

DanJuZiDuan.propTypes = propTypes;
DanJuZiDuan.defaultProps = defaultProps;
