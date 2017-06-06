import React from 'react';
import { storiesOf } from '@kadira/storybook';
import GuDingZhiTab from '../src/components/GuDingZhiTab';

storiesOf('GuDingZhiTab (固定值)', module)
  .addWithInfo('default', () => (
    <GuDingZhiTab />
  ));
