import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { text } from '@kadira/storybook-addon-knobs';

import FormulaTree from '../src/components/FormulaTree';
import json from './单据字段Data';

storiesOf('FormulaTree', module)
  .addWithInfo('default', () => (
    <FormulaTree
      treeData={json}
    />
  ))
  .addWithInfo('onSelect', () => (
    <FormulaTree
      treeData={json}
      onSelect={action('FormulaTree::onSelect')}
    />
  ))
  .addWithInfo('update prop selectedKey', () => (
    <FormulaTree
      treeData={json}
      selectedKey={text('FormulaTree.props.selectedKey', 'G001ZM0000BASE000DEF00000ATT00000004')}
    />
  ));
