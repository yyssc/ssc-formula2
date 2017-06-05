import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Formula from '../src/components/Formula';

storiesOf('Formula', module)
  .addWithInfo('default', () => (
    <Formula />
  ));
