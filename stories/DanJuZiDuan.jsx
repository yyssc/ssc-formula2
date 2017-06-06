import React from 'react';
import { storiesOf } from '@kadira/storybook';
import DanJuZiDuan from '../src/components/DanJuZiDuan';

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
    title: '0-2-label',
    key: '0-2-key',
  },
];

storiesOf('DanJuZiDuan', module)
  .addWithInfo('default', () => (
    <DanJuZiDuan
      treeData={treeData}
    />
  ));
