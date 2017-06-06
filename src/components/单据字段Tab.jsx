import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';

import SearchBox from './SearchBox';
import FormulaTree from './FormulaTree';
import treeDataShape from '../shapes/treeDataShape';

const propTypes = forbidExtraProps({
  treeData: treeDataShape.isRequired,
  onTreeSelect: PropTypes.func,
});

export const defaultProps = {
  onTreeSelect: () => {},
};


export default class 单据字段Tab extends React.Component {
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
   * @memberof 单据字段Tab
   */
  componentWillReceiveProps() {
  }

  /**
   *
   *
   * @param {any} nextProps
   * @param {any} nextState
   *
   * @memberof 单据字段Tab
   */
  // shouldComponentUpdate() {
  // }

  /**
   *
   *
   * @param {any} prevProps
   * @param {any} prevState
   *
   * @memberof 单据字段Tab
   */
  componentDidUpdate() {
  }

  render() {
    return (
      <div>
        <SearchBox />
        <FormulaTree
          treeData={this.props.treeData}
          onSelect={this.props.onTreeSelect}
        />
      </div>
    );
  }
}

单据字段Tab.propTypes = propTypes;
单据字段Tab.defaultProps = defaultProps;
