import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';

import TextBox from './TextBox';
import FormuaTabs from './FormulaTabs';
import treeDataShape from '../shapes/treeDataShape';

const propTypes = forbidExtraProps({
  onSubmit: PropTypes.func,
  /**
   * 单据字段标签页中的树的数据
   */
  danJuZiDuanTreeData: treeDataShape.isRequired,
});

export const defaultProps = {
  onSubmit: () => {},
};


export default class Formula extends React.Component {
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
   * @memberof Formula
   */
  componentWillReceiveProps() {
  }

  /**
   *
   *
   * @param {any} nextProps
   * @param {any} nextState
   *
   * @memberof Formula
   */
  // shouldComponentUpdate() {
  // }

  /**
   *
   *
   * @param {any} prevProps
   * @param {any} prevState
   *
   * @memberof Formula
   */
  componentDidUpdate() {
  }

  render() {
    return (
      <div>
        <TextBox
          onSubmit={this.props.onSubmit}
        />
        <FormuaTabs
          danJuZiDuanTreeData={this.props.danJuZiDuanTreeData}
        />
      </div>
    );
  }
}

Formula.propTypes = propTypes;
Formula.defaultProps = defaultProps;
