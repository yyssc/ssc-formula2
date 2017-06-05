import React from 'react';
import { storiesOf } from '@kadira/storybook';
import FormulaTabs from '../src/components/FormulaTabs';

storiesOf('FormulaTabs', module)
  .addWithInfo('default', () => (
    <FormulaTabs />
  ));
