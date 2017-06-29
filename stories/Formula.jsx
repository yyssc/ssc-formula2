import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { text } from '@kadira/storybook-addon-knobs';

import Formula from '../src/components/Formula';
import json from './单据字段Data';
import 档案转换ItemsData from './档案转换Data';

const 单据字段TreeData = json;

storiesOf('Formula (公式编辑器)', module)
  .addWithInfo('default', () => (
    <Formula
      单据字段TreeData={单据字段TreeData}
      固定值ReferDataUrl="http://127.0.0.1:3009/refbase_ctr/queryRefJSON"
      档案转换ItemsData={档案转换ItemsData}
      固定值档案值RefCode="entity"
      onCancel={action('Formula::onCancel')}
      onChange={action('Formula::onChange')}
      onSubmit={action('Formula::onSubmit')}
      onValidate={action('Formula::onValidate')}
    />
  ))
  .addWithInfo('init value', () => (
    <Formula
      value={'foo'}
      单据字段TreeData={单据字段TreeData}
      固定值ReferDataUrl="http://127.0.0.1:3009/refbase_ctr/queryRefJSON"
      档案转换ItemsData={档案转换ItemsData}
      onCancel={action('Formula::onCancel')}
      onChange={action('Formula::onChange')}
      onSubmit={action('Formula::onSubmit')}
      onValidate={action('Formula::onValidate')}
    />
  ))
  .addWithInfo('update prop value', () => (
    <Formula
      value={text('Formula.props.value', 'old')}
      单据字段TreeData={单据字段TreeData}
      固定值ReferDataUrl="http://127.0.0.1:3009/refbase_ctr/queryRefJSON"
      档案转换ItemsData={档案转换ItemsData}
      onCancel={action('Formula::onCancel')}
      onChange={action('Formula::onChange')}
      onSubmit={action('Formula::onSubmit')}
      onValidate={action('Formula::onValidate')}
    />
  ));
