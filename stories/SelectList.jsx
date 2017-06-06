import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { text } from '@kadira/storybook-addon-knobs';

import SelectList from '../src/components/SelectList';

const items = [
  {
    id: '0',
    code: '456',
    name: '789',
  },
  {
    id: '1',
    code: '2456',
    name: '2789',
  },
  {
    id: '2',
    code: '3456',
    name: '3789',
  },
];

storiesOf('SelectList', module)
  .addWithInfo('default', () => (
    <SelectList
      items={items}
    />
  ))
  .addWithInfo('activeKey', () => (
    <SelectList
      items={items}
      activeKey={'1'}
    />
  ))
  .addWithInfo('update activeKey', () => (
    <SelectList
      items={items}
      activeKey={text('SelectList.props.activeKey', '2')}
    />
  ));
