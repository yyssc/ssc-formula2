/* eslint-disable react/jsx-pascal-case */

import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import WithContext from 'react-with-context';

import 档案转换Tab from '../src/components/档案转换Tab';
import json from './档案转换Data';
import treeData from './单据字段Data';

// const referDataUrl = 'http://127.0.0.1:3009/refbase_ctr/queryRefJSON';
const referDataUrl = 'http://172.20.4.220:8080/ficloud/refbase_ctr/queryRefJSON';

storiesOf('档案转换Tab', module)
  .addWithInfo('default', () => (
    <WithContext
      context={{
        referDataUrl,
      }}
    >
      <档案转换Tab
        items={json}
        treeData={treeData}
        onInsert={action('档案转换Tab::onInsert')}
      />
    </WithContext>
  ));
