import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import FormulaTree from '../src/components/FormulaTree';

const treeData = [
  {
    title: '0-0-label',
    key: '0-0-key',
    children: [
      {
        title: '0-0-0-label',
        key: '0-0-0-key',
        children: [
          {
            title: '0-0-0-0-label',
            key: '0-0-0-0-key',
          },
          {
            title: '0-0-0-1-label',
            key: '0-0-0-1-key',
          },
          {
            title: '0-0-0-2-label',
            key: '0-0-0-2-key',
          },
        ],
      },
      {
        title: '0-0-1-label',
        key: '0-0-1-key',
        children: [
          {
            title: '0-0-1-0-label',
            key: '0-0-1-0-key',
          },
          {
            title: '0-0-1-1-label',
            key: '0-0-1-1-key',
          },
          {
            title: '0-0-1-2-label',
            key: '0-0-1-2-key',
          },
        ],
      },
      {
        title: '0-0-2-label',
        key: '0-0-2-key',
      },
    ],
  },
  {
    title: '0-1-label',
    key: '0-1-key',
    children: [
      {
        title: '0-1-0-label',
        key: '0-1-0-key',
        children: [
          {
            title: '0-1-0-0-label',
            key: '0-1-0-0-key',
          },
          {
            title: '0-1-0-1-label',
            key: '0-1-0-1-key',
          },
          {
            title: '0-1-0-2-label',
            key: '0-1-0-2-key',
          },
        ],
      },
      {
        title: '0-1-1-label',
        key: '0-1-1-key',
        children: [
          {
            title: '0-1-1-0-label',
            key: '0-1-1-0-key',
          },
          {
            title: '0-1-1-1-label',
            key: '0-1-1-1-key',
          },
          {
            title: '0-1-1-2-label',
            key: '0-1-1-2-key',
          },
        ],
      },
      {
        title: '0-1-2-label',
        key: '0-1-2-key',
      },
    ],
  },
  {
    title: '0-2-label',
    key: '0-2-key',
  },
];


storiesOf('FormulaTree', module)
  .addWithInfo('default', () => (
    <FormulaTree
      treeData={treeData}
    />
  ))
  .addWithInfo('onSelect', () => (
    <FormulaTree
      treeData={treeData}
      // onSelect={action('ttt')}
      onSelect={(o) => {
        // 使用action会导致浏览器卡死...
        console.log(o);
      }}
    />
  ));
