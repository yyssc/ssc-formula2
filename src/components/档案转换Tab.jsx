import React from 'react';
import { forbidExtraProps } from 'airbnb-prop-types';

import SearchBox from './SearchBox';
import FormulaTree from './FormulaTree';
import treeDataShape from '../shapes/treeDataShape';

const propTypes = forbidExtraProps({
  treeData: treeDataShape.isRequired,
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
        <FormulaTree
          treeData={this.props.treeData}
        />
      </div>
    );
  }
}

档案转换Tab.propTypes = propTypes;
档案转换Tab.defaultProps = defaultProps;
