/* eslint-disable react/jsx-pascal-case */

import React from 'react';
import { storiesOf } from '@kadira/storybook';

import 单据字段Tab from '../src/components/单据字段Tab';
import json from './单据字段Data';

const treeData = json;

storiesOf('单据字段Tab', module)
  .addWithInfo('default', () => (
    <单据字段Tab
      treeData={treeData}
    />
  ))
  .addWithInfo('onTreeSelect', () => (
    <单据字段Tab
      treeData={treeData}
      onTreeSelect={(o) => {
        console.log('单据字段Tab::onTreeSelect', o);
      }}
    />
  ));
