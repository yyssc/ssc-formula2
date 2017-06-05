import React from 'react';
import { storiesOf } from '@kadira/storybook';
import DanJuZiDuan from '../src/components/DanJuZiDuan';

storiesOf('DanJuZiDuan', module)
  .addWithInfo('default', () => (
    <DanJuZiDuan />
  ));
