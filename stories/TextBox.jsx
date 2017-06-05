import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import TextBox from '../src/components/TextBox';

storiesOf('TextBox', module)
  .addWithInfo('default', () => (
    <TextBox
      onSubmit={action('TextBox::onSubmit')}
    />
  ));
