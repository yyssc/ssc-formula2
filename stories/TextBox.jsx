import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { text } from '@kadira/storybook-addon-knobs';

import TextBox from '../src/components/TextBox';

storiesOf('TextBox', module)
  .addWithInfo('default', () => (
    <TextBox
      onSubmit={action('TextBox::onSubmit')}
    />
  ))
  .addWithInfo('init value', () => (
    <TextBox
      value={'foo'}
      onSubmit={action('TextBox::onSubmit')}
    />
  ))
  .addWithInfo('change value prop',
    'You could change the input props.',
    () => (
      <TextBox
        value={text('TextBox.props.value', 'old')}
        onSubmit={action('TextBox::onSubmit')}
      />
    ),
  );
