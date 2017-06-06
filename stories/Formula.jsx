import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Formula from '../src/components/Formula';
import json from './单据字段Data';
import 档案转换ItemsData from './档案转换Data';

const 单据字段TreeData = json;

storiesOf('Formula', module)
  .addWithInfo('default', () => (
    <Formula
      单据字段TreeData={单据字段TreeData}
      档案转换ItemsData={档案转换ItemsData}
      onSubmit={action('Formula::onSubmit')}
    />
  ))
  .addWithInfo('init value', () => (
    <Formula
      value={'foo'}
      单据字段TreeData={单据字段TreeData}
      档案转换ItemsData={档案转换ItemsData}
      onSubmit={action('Formula::onSubmit')}
    />
  ));
