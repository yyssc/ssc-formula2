import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';

import TextBox from './TextBox';
import FormuaTabs from './FormulaTabs';
import treeDataShape from '../shapes/treeDataShape';
import 档案转换ItemsShape from '../shapes/档案转换ItemsShape';

const propTypes = forbidExtraProps({
  onCancel: PropTypes.func,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  onValidate: PropTypes.func,
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
  固定值档案值RefCode: PropTypes.string,
});

export const defaultProps = {
  onCancel: () => {},
  onChange: () => {},
  onSubmit: () => {},
  onValidate: () => {},
  value: '',
  固定值档案值RefCode: null,
};


export default class Formula extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
    };

    this.handle档案值ReferChange = this.handle档案值ReferChange.bind(this);
    this.handle单据字段TreeSelect = this.handle单据字段TreeSelect.bind(this);
    this.handle档案转换ListSelect = this.handle档案转换ListSelect.bind(this);
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

  /**
   * 固定值tab页中的档案值发生改变的回调
   * TODO 不应该将固定值tab页中的参照返回的值直接往上返到这里
   * 应该在固定值tab中处理好了再往上返
   * @param {any} selected
   * @memberof Formula
   */
  handle档案值ReferChange(selected) {
    if (selected && selected.length > 0) {
      const selectedItem = selected[0];
      const 固定值档案值RefCode = this.props.固定值档案值RefCode;
      this.textBoxRef.insertText(`getID("${固定值档案值RefCode}","${selectedItem.name}","${selectedItem.id}") `);
    }
  }

  handle单据字段TreeSelect(treeNodeObj) {
    this.textBoxRef.insertText(` ${treeNodeObj.props.code} `);
  }

  /**
   * 郭老师给的结果拼接规则
   * ```
   * cmapping("这里拼code / name","这里拼id",这里拼classtype1对应的单据项目,这里拼classtype2对应的单据项目,有几个classtype就拼几个)
   * ```
   * @param {any} o
   * @memberof Formula
   */
  handle档案转换ListSelect(itemObj) {
    const arg1 = `${itemObj.code} / ${itemObj.name}`;
    const arg2 = `${itemObj.id}`;
    const arg3 = [];
    Object.keys(itemObj).forEach((key) => {
      // key需要是classtype加数字的形式
      if (/^classtype\d$/.exec(key) !== null) {
        // 有可能是null
        if (itemObj[key] !== null) {
          // 需要跟郭老师确认是否使用code就可以了
          arg3.push(itemObj[key].code);
        }
      }
    });
    this.textBoxRef.insertText(`cmapping("${arg1}","${arg2}","${arg3.join(',')}")`);
  }

  render() {
    return (
      <div>
        <TextBox
          ref={(c) => { this.textBoxRef = c; }}
          value={this.state.value}
          onCancel={this.props.onCancel}
          onChange={this.props.onChange}
          onSubmit={this.props.onSubmit}
          onValidate={this.props.onValidate}
        />
        <FormuaTabs
          单据字段TreeData={this.props.单据字段TreeData}
          固定值ReferDataUrl={this.props.固定值ReferDataUrl}
          档案转换ItemsData={this.props.档案转换ItemsData}
          固定值档案值RefCode={this.props.固定值档案值RefCode}
          on档案值ReferChange={this.handle档案值ReferChange}
          on单据字段TreeSelect={this.handle单据字段TreeSelect}
          on档案转换ListSelect={this.handle档案转换ListSelect}
        />
      </div>
    );
  }
}

Formula.propTypes = propTypes;
Formula.defaultProps = defaultProps;
