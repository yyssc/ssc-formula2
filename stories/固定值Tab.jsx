/* eslint-disable react/jsx-pascal-case */

import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import WithContext from 'react-with-context';
import 固定值Tab from '../src/components/固定值Tab';

// const referDataUrl = 'http://127.0.0.1:3009/refbase_ctr/queryRefJSON';
const referDataUrl = 'http://172.20.4.220/ficloud/refbase_ctr/queryRefJSON';

storiesOf('固定值Tab', module)
  .addWithInfo('default', () => (
    <WithContext
      context={{
        referDataUrl,
        referFunCode: 'conversion',
        固定值档案值RefCode: null,
      }}
    >
      <固定值Tab
        on档案值ReferChange={action('固定值Tab::on档案值ReferChange')}
      />
    </WithContext>
  ))
  .addWithInfo('初始refCode', () => (
    <WithContext
      context={{
        referDataUrl,
        固定值档案值RefCode: 'entity',
      }}
    >
      <固定值Tab
        on档案值ReferChange={action('固定值Tab::on档案值ReferChange')}
      />
    </WithContext>
  ));
