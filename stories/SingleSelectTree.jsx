import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { text } from '@kadira/storybook-addon-knobs';

import SingleSelectTree from '../src/components/SingleSelectTree';
import json from './单据字段Data';

storiesOf('SingleSelectTree', module)
  .addWithInfo('default', () => (
    <SingleSelectTree
      treeData={json}
    />
  ))
  .addWithInfo('onSelect', () => (
    <SingleSelectTree
      treeData={json}
      onSelect={action('SingleSelectTree::onSelect')}
    />
  ))
  .addWithInfo('update prop selectedKey', () => (
    <SingleSelectTree
      treeData={json}
      selectedKey={text('SingleSelectTree.props.selectedKey', 'G001ZM0000BASE000DEF00000ATT00000004')}
    />
  ));
