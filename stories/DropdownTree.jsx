import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
// import { text } from '@kadira/storybook-addon-knobs';

import DropdownTree from '../src/components/DropdownTree';
import json from './单据字段Data';

storiesOf('DropdownTree', module)
  .addWithInfo('default', () => (
    <DropdownTree
      treeData={json}
      onChange={action('DropdownTree::onChange')}
    />
  ))
  .addWithInfo('with styles', () => (
    <DropdownTree
      inputStyle={{
        width: '180px',
      }}
      overlayStyle={{
        width: '500px',
        maxHeight: '100px',
        overflow: 'auto',
      }}
      treeData={json}
      onChange={action('DropdownTree::onChange')}
    />
  ));
