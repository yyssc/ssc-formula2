import React from 'react';
import PropTypes from 'prop-types';
import { Refers } from 'ssc-refer2';

/**
 * 对参照组件进行封装
 *
 * 特色：
 * - 单选下拉菜单参照
 */

const propTypes = {
  disabled: PropTypes.bool,
  filterBy: PropTypes.arrayOf(PropTypes.string),
  /**
   * 初始化时候选中的下拉菜单项
   */
  selected: PropTypes.shape({
    id: PropTypes.string,
  }),
  referConditions: PropTypes.shape({
    refCode: PropTypes.string,
    // ...
  }).isRequired,
  referDataUrl: PropTypes.string.isRequired,
  /**
   * 参照值发生改变的时候
   * function onChange(
   *   Object value // 下拉菜单中被选中的项目的值
   *                // 比如value = { id: '', code: '', name: '' }
   * )
   */
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  renderMenuItemChildren: PropTypes.func,
};

const defaultProps = {
  disabled: false,
  filterBy: ['name'],
  placeholder: '请选择...',
  selected: undefined,
  renderMenuItemChildren: undefined,
};

export default class ReferList extends React.Component {
  render() {
    return (
      <Refers
        ref={(c) => {
          // According to issue: https://github.com/facebook/react/issues/4533
          // c is null when parent is stateless/functional component
          // console.log(c);
          if (c) {
            // 由于ssc-refer2的Refers组件使用了react-clickoutside这个HOC
            // 所以只能通过c.getInstance()来获取reference to component
            // 比如调用Refers组件提供的clear()方法：
            // ```js
            // c.getInstance().clear()
            // ```
            // 具体参照：https://github.com/Pomax/react-onclickoutside#but-how-can-i-access-my-component-it-has-an-api-that-i-rely-on

            // Alias of clear() on Refers component
            this.clear = c.getInstance().clear;
          }
        }}
        labelKey="name"
        emptyLabel=""
        multiple={false}
        placeholder={this.props.placeholder}
        disabled={this.props.disabled}
        referType="list"
        referDataUrl={this.props.referDataUrl}
        referConditions={this.props.referConditions}
        filterBy={this.props.filterBy}
        onChange={(selected) => {
          this.props.onChange(ReferList.decode(selected));
        }}
        onBlur={this.props.onBlur}
        selected={ReferList.encode(this.props.selected)}
        renderMenuItemChildren={this.props.renderMenuItemChildren}
      />
    );
  }
}

ReferList.propTypes = propTypes;
ReferList.defaultProps = defaultProps;

/**
 * 将应用层使用的参照数据格式转换成参照组件使用的数据格式
 * {} => [{}]
 * undefined => []
 * null => []
 * @param {Object} value
 * @return {Array} [description]
 */
ReferList.encode = value => (value ? [value] : []);

/**
 * 将参照组件使用的数据格式转换成应用层使用的参照数据格式
 * [{}] => {}
 * [] => undefined
 * @param {Array} value
 * @return {Object} [description]
 */
ReferList.decode = value => value[0];
