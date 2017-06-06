import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Formula from '../src/components/Formula';
import json from './单据字段Data';

const 单据字段TreeData = json;
const 档案转换TreeData = json;

storiesOf('Formula', module)
  .addWithInfo('default', () => (
    <Formula
      单据字段TreeData={单据字段TreeData}
      档案转换TreeData={档案转换TreeData}
      onSubmit={action('Formula::onSubmit')}
    />
  ))
  .addWithInfo('init value', () => (
    <Formula
      value={'foo'}
      单据字段TreeData={单据字段TreeData}
      档案转换TreeData={档案转换TreeData}
      onSubmit={action('Formula::onSubmit')}
    />
  ));
