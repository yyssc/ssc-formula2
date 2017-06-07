import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';

import TextBox from './TextBox';
import FormuaTabs from './FormulaTabs';
import treeDataShape from '../shapes/treeDataShape';
import 档案转换ItemsShape from '../shapes/档案转换ItemsShape';

const propTypes = forbidExtraProps({
  onSubmit: PropTypes.func,
  value: PropTypes.string,
  /**
   * 单据字段标签页中的树的数据
   */
  单据字段TreeData: treeDataShape.isRequired,
  /**
   * 固定值标签页中参照需要发起请求的URL
   */
  固定值ReferDataUrl: PropTypes.string.isRequired,
  /**
   * 档案转换标签页中的树的数据
   */
  档案转换ItemsData: 档案转换ItemsShape.isRequired,
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
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.value) {
      this.setState({
        value: nextProps.value,
      });
    }
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
      value: `${this.state.value} ${treeNodeObj.props.code}`,
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
          固定值ReferDataUrl={this.props.固定值ReferDataUrl}
          档案转换ItemsData={this.props.档案转换ItemsData}
          on单据字段TreeSelect={this.handle单据字段TreeSelect}
        />
      </div>
    );
  }
}

Formula.propTypes = propTypes;
Formula.defaultProps = defaultProps;
