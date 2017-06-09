import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { text } from '@kadira/storybook-addon-knobs';

import ReferList from '../src/components/ReferList';

storiesOf('ReferList', module)
  .addWithInfo('default', () => (
    <ReferList />
  ))
  .addWithInfo('init empty items', () => (
    <ReferList
      items={[]}
    />
  ))
  .addWithInfo('init items', () => (
    <ReferList
      items={[
        { id: '1', code: '01', name: 'one' },
        { id: '2', code: '02', name: 'two' },
        { id: '3', code: '03', name: 'three' },
        { id: '4', code: '04', name: 'four' },
      ]}
    />
  ))
  .addWithInfo('init items with selected value', () => (
    <ReferList
      items={[
        { id: '1', code: '01', name: 'one' },
        { id: '2', code: '02', name: 'two' },
        { id: '3', code: '03', name: 'three' },
        { id: '4', code: '04', name: 'four' },
      ]}
      value={'2'}
    />
  ))
  .addWithInfo('update props', () => (
    <ReferList
      items={[
        { id: '1', code: '01', name: text('ReferList.props.items[0].name', 'one') },
        { id: '2', code: '02', name: text('ReferList.props.items[1].name', 'two') },
        { id: '3', code: '03', name: text('ReferList.props.items[2].name', 'three') },
        { id: '4', code: '04', name: text('ReferList.props.items[3].name', 'four') },
      ]}
      value={text('ReferList.props.value', '2')}
    />
  ))
  .addWithInfo('onChange event handler', () => (
    <ReferList
      items={[
        { id: '1', code: '01', name: 'one' },
        { id: '2', code: '02', name: 'two' },
        { id: '3', code: '03', name: 'three' },
        { id: '4', code: '04', name: 'four' },
      ]}
      onChange={action('ReferList::onChange')}
    />
  ));
