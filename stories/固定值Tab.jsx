/* eslint-disable react/jsx-pascal-case */

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import 固定值Tab from '../src/components/固定值Tab';

storiesOf('固定值Tab', module)
  .addWithInfo('没有档案初始值', () => (
    <固定值Tab />
  ))
  .addWithInfo('有档案初始值', () => (
    <固定值Tab
      refCode={'dept'}
    />
  ));
