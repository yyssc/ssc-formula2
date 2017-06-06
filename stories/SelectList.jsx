import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { text } from '@kadira/storybook-addon-knobs';

import SelectList from '../src/components/SelectList';
import json from './档案转换Data';

storiesOf('SelectList', module)
  .addWithInfo('default', () => (
    <SelectList
      items={json}
    />
  ))
  .addWithInfo('activeKey', () => (
    <SelectList
      items={json}
      activeKey={'1'}
    />
  ))
  .addWithInfo('update activeKey', () => (
    <SelectList
      items={json}
      activeKey={text('SelectList.props.activeKey', '2')}
    />
  ));
