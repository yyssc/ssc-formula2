import React from 'react';
// import PropTypes from 'prop-types';

import BaseSubjectRefer from './BaseSubjectRefer';

/**
 * 科目参照组件
 * - accsubject
 */

const propTypes = {
};

const defaultProps = {
};

export default function SimpleAccSubjectRefer(props) {
  return (
    <BaseSubjectRefer
      {...props}
      placeholder="请选择科目..."
      refCode="accsubject"
    />
  );
}

SimpleAccSubjectRefer.propTypes = propTypes;
SimpleAccSubjectRefer.defaultProps = defaultProps;
