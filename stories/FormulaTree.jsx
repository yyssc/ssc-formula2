import React from 'react';
import { storiesOf } from '@kadira/storybook';
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
      // onSelect={action('ttt')}
      onSelect={(o) => {
        // 使用action会导致浏览器卡死...
        console.log(o);
      }}
    />
  ))
  .addWithInfo('update prop selectedKey', () => (
    <FormulaTree
      treeData={json}
      selectedKey={text('FormulaTree.props.selectedKey', 'G001ZM0000BASE000DEF00000ATT00000004')}
    />
  ));
