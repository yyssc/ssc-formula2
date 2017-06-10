import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { text } from '@kadira/storybook-addon-knobs';

import SelectList from '../src/components/SelectList';
import json from './档案转换Data';

storiesOf('SelectList', module)
  .addWithInfo('default', () => (
    <SelectList
      items={json}
      onSelect={action('SelectList::onSelect')}
    />
  ))
  .addWithInfo('activeKey', () => (
    <SelectList
      items={json}
      activeKey={'57B3D229-FD2E-446A-9ED1-14FCF668214D'}
      onSelect={action('SelectList::onSelect')}
    />
  ))
  .addWithInfo('update activeKey', () => (
    <SelectList
      items={json}
      activeKey={text('SelectList.props.activeKey', '2')}
      onSelect={action('SelectList::onSelect')}
    />
  ));
