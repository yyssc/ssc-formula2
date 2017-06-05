import React from 'react';
import { storiesOf } from '@kadira/storybook';
import DanJuZiDuanTree from '../src/components/DanJuZiDuanTree';

storiesOf('DanJuZiDuanTree', module)
  .addWithInfo('default', () => (
    <DanJuZiDuanTree />
  ));
