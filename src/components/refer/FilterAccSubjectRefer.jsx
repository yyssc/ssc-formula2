import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SimpleAccSubjectChartRefer from './SimpleAccSubjectChartRefer';
import SimpleAccSubjectRefer from './SimpleAccSubjectRefer';

const propTypes = {
  /**
   * 右侧/第二个参照发生改变的时候
   * function onChange(
   *   Object value // 下拉菜单中被选中的项目的值
   *                // 比如value = { id: '', code: '', name: '' }
   * )
   */
  onChange: PropTypes.func.isRequired,
  referDataUrl: PropTypes.string.isRequired,
};
const defaultProps = {};

/**
 * 提供科目表过滤功能的科目组件
 * 应用场景：
 * 1. 先选从第一个参照中选择科目表 http://yzb.yyssc.org/home_index.html#/setting/subjectchart 对应数据库中的bd_accsubjectchart表
 * 2. 然后在第二个参照中选择会计科目 http://yzb.yyssc.org/home_index.html#/setting/accsubject 对应数据库中的bd_accsubject表格
 */

export default class FilterAccSubjectRefer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accSubjectChartId: null,
      leftValue: null,
      rightValue: null,
    };

    this.handleLeftReferChange = this.handleLeftReferChange.bind(this);
    this.handleRightReferChange = this.handleRightReferChange.bind(this);
  }

  /**
   * 当第一个参照值变化的时候
   * @param  {Object} selected
   * @return {[type]}          [description]
   */
  handleLeftReferChange(selected) {
    this.setState({
      leftValue: selected,
      accSubjectChartId: selected ? selected.id : null,
    });
    // 由于ssc-refer2组件更新selected属性的时候有一个bug，导致之前selected=Array(1)
    // 然后selected=Array(0)的时候，UI上的文本框内仍然有内容
    // 所以必须通过ref形式直接调用clear()方法
    if (!selected) {
      this.referListRef.clear();
    }
  }

  /**
   * 当第二个参照值变化的时候
   * @param  {Object} selected
   * @return {[type]}          [description]
   */
  handleRightReferChange(selected) {
    this.setState({
      rightValue: selected,
    });
    this.props.onChange(selected);
  }

  render() {
    return (
      <div>
        <SimpleAccSubjectChartRefer
          referDataUrl={this.props.referDataUrl}
          selected={this.state.leftValue}
          onChange={this.handleLeftReferChange}
          onBlur={() => {}}
        />
        {' '}
        <SimpleAccSubjectRefer
          referListRef={(c) => { this.referListRef = c; }}
          referDataUrl={this.props.referDataUrl}
          filterCondition={`{accsubjectchart:${this.state.accSubjectChartId}}`}
          disabled={this.state.accSubjectChartId === null}
          selected={this.state.accSubjectChartId === null
            ? null
            : this.state.value
          }
          onChange={this.handleRightReferChange}
          onBlur={() => {}}
        />
      </div>
    );
  }
}

FilterAccSubjectRefer.propTypes = propTypes;
FilterAccSubjectRefer.defaultProps = defaultProps;
