import React from 'react';
// import PropTypes from 'prop-types';

import BaseSubjectRefer from './BaseSubjectRefer';

/**
 * 科目表参照组件
 * - accsubjectchart
 */

const propTypes = {
};

const defaultProps = {
};

export default function SimpleAccSubjectChartRefer(props) {
  return (
    <BaseSubjectRefer
      {...props}
      placeholder="请选择科目表..."
      refCode="accsubjectchart"
    />
  );
}

SimpleAccSubjectChartRefer.propTypes = propTypes;
SimpleAccSubjectChartRefer.defaultProps = defaultProps;
