import React from 'react';
import { storiesOf } from '@kadira/storybook';
import FormulaTabs from '../src/components/FormulaTabs';

const 单据字段TreeData = [
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

const 档案转换TreeData = [
  {
    title: '0-0-label',
    key: '0-0-key',
  },
  {
    title: '0-1-label',
    key: '0-1-key',
  },
  {
    title: '0-2-label',
    key: '0-2-key',
  },
  {
    title: '0-3-label',
    key: '0-3-key',
  },
];

storiesOf('FormulaTabs', module)
  .addWithInfo('default', () => (
    <FormulaTabs
      单据字段TreeData={单据字段TreeData}
      档案转换TreeData={档案转换TreeData}
    />
  ));
