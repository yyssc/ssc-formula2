import React from 'react';
import { forbidExtraProps } from 'airbnb-prop-types';

import SearchBox from './SearchBox';
import DanJuZiDuanTree from './DanJuZiDuanTree';
import treeDataShape from '../shapes/treeDataShape';

const propTypes = forbidExtraProps({
  treeData: treeDataShape.isRequired,
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
        <SearchBox />
        <DanJuZiDuanTree
          treeData={this.props.treeData}
        />
      </div>
    );
  }
}

DanJuZiDuan.propTypes = propTypes;
DanJuZiDuan.defaultProps = defaultProps;
