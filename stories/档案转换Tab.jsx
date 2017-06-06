/* eslint-disable react/jsx-pascal-case */

import React from 'react';
import { storiesOf } from '@kadira/storybook';

import 档案转换Tab from '../src/components/档案转换Tab';
import json from './单据字段Data';

const treeData = json;

storiesOf('档案转换Tab', module)
  .addWithInfo('default', () => (
    <档案转换Tab
      treeData={treeData}
    />
  ));
