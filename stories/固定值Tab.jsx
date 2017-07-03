/* eslint-disable react/jsx-pascal-case */

import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import 固定值Tab from '../src/components/固定值Tab';

// const referDataUrl = 'http://127.0.0.1:3009/refbase_ctr/queryRefJSON';
const referDataUrl = 'http://172.20.4.220:8080/ficloud/refbase_ctr/queryRefJSON';

storiesOf('固定值Tab', module)
  .addWithInfo('default', () => (
    <固定值Tab
      referDataUrl={referDataUrl}
      on档案值ReferChange={action('固定值Tab::on档案值ReferChange')}
    />
  ))
  .addWithInfo('初始refCode', () => (
    <固定值Tab
      referDataUrl={referDataUrl}
      on档案值ReferChange={action('固定值Tab::on档案值ReferChange')}
      档案值RefCode="entity"
    />
  ));
