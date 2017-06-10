/* eslint-disable react/jsx-pascal-case */

import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import 固定值Tab from '../src/components/固定值Tab';

storiesOf('固定值Tab', module)
  .addWithInfo('default', () => (
    <固定值Tab
      referDataUrl="http://127.0.0.1:3009/refbase_ctr/queryRefJSON"
      on档案值ReferChange={action('固定值Tab::on档案值ReferChange')}
    />
  ));
