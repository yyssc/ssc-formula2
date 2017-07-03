import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { text } from '@kadira/storybook-addon-knobs';

import ReferList2 from '../src/components/ReferList2';

storiesOf('ReferList2', module)
  .addWithInfo('default', () => (
    <ReferList2 />
  ))
  .addWithInfo('init empty items', () => (
    <ReferList2
      items={[]}
    />
  ))
  .addWithInfo('init items', () => (
    <ReferList2
      items={[
        { id: '1', code: '01', name: 'one' },
        { id: '2', code: '02', name: 'two' },
        { id: '3', code: '03', name: 'three' },
        { id: '4', code: '04', name: 'four' },
      ]}
    />
  ))
  .addWithInfo('init items with selected value', () => (
    <ReferList2
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
    <ReferList2
      items={[
        { id: '1', code: '01', name: text('ReferList.props.items[0].name', 'one') },
        { id: '2', code: '02', name: text('ReferList.props.items[1].name', 'two') },
        { id: '3', code: '03', name: text('ReferList.props.items[2].name', 'three') },
        { id: '4', code: '04', name: text('ReferList.props.items[3].name', 'four') },
      ]}
      value={text('ReferList2.props.value', '2')}
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
      onChange={action('ReferList2::onChange')}
    />
  ));
