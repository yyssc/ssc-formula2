/* eslint-disable react/jsx-pascal-case */

import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import 档案转换Tab from '../src/components/档案转换Tab';
import json from './档案转换Data';

storiesOf('档案转换Tab', module)
  .addWithInfo('default', () => (
    <档案转换Tab
      items={json}
      onSelect={action('档案转换Tab::onSelect')}
    />
  ));
