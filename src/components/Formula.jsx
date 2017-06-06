import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';

import TextBox from './TextBox';
import FormuaTabs from './FormulaTabs';
import treeDataShape from '../shapes/treeDataShape';

const propTypes = forbidExtraProps({
  onSubmit: PropTypes.func,
  value: PropTypes.string,
  /**
   * 单据字段标签页中的树的数据
   */
  单据字段TreeData: treeDataShape.isRequired,
  /**
   * 档案转换标签页中的树的数据
   */
  档案转换TreeData: treeDataShape.isRequired,
});

export const defaultProps = {
  onSubmit: () => {},
  value: '',
};


export default class Formula extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
    };

    this.handle单据字段TreeSelect = this.handle单据字段TreeSelect.bind(this);
  }

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

  handle单据字段TreeSelect(treeNodeObj) {
    this.setState({
      value: `${this.state.value} ${treeNodeObj.props.eventKey}`,
    });
  }

  render() {
    return (
      <div>
        <TextBox
          value={this.state.value}
          onSubmit={this.props.onSubmit}
        />
        <FormuaTabs
          单据字段TreeData={this.props.单据字段TreeData}
          档案转换TreeData={this.props.档案转换TreeData}
          on单据字段TreeSelect={this.handle单据字段TreeSelect}
        />
      </div>
    );
  }
}

Formula.propTypes = propTypes;
Formula.defaultProps = defaultProps;
