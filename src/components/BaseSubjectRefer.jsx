import React from 'react';
import PropTypes from 'prop-types';
import ReferList from './ReferList';

/**
 * 科目参照
 *
 * 可以使用本基础组件的参照档案类型
 * - 科目 subject / accsubject
 * - 科目表 subjectchart / accsubjectchart
 *
 * FICLOUD-901 要求科目档案统一样式和功能
 *
 * 特色：
 * - 默认refCode是subject
 * - 下来菜单项是code+name
 */

const propTypes = {
  disabled: PropTypes.bool,
  filterCondition: PropTypes.string,
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
  refCode: PropTypes.string,
  referDataUrl: PropTypes.string.isRequired,
  // According to this issue: https://github.com/facebook/react/issues/4936
  // Refs don't work on Stateless Components
  // A workaround can be found: https://github.com/facebook/react/issues/4936#issuecomment-179917137
  referListRef: PropTypes.func,
  /**
   * 初始化时候选中的下拉菜单项
   */
  selected: PropTypes.shape({
    id: PropTypes.string,
  }),
};

const defaultProps = {
  disabled: undefined,
  filterCondition: undefined,
  placeholder: undefined,
  refCode: 'subject',
  referListRef: () => {},
  selected: undefined,
};

export default function BaseSubjectRefer({
  disabled,
  filterCondition,
  onChange,
  onBlur,
  placeholder,
  refCode,
  referDataUrl,
  referListRef,
  selected,
}) {
  const referConditions = {
    refCode,
    refType: 'table',
    fields: ['id', 'code', 'name'],
    displayFields: ['id', 'code', 'name'],
  };
  if (filterCondition) {
    referConditions.filterCondition = filterCondition;
  }
  return (
    <ReferList
      ref={referListRef}
      referDataUrl={referDataUrl}
      referConditions={referConditions}
      filterBy={['code', 'name']}
      placeholder={placeholder}
      disabled={disabled}
      selected={selected}
      onChange={onChange}
      onBlur={onBlur}
      renderMenuItemChildren={option => [
        <span key="code">
          {`${option.code} `}
        </span>,
        <strong key="name">{option.name} </strong>,
      ]}
    />
  );
}

BaseSubjectRefer.propTypes = propTypes;
BaseSubjectRefer.defaultProps = defaultProps;
