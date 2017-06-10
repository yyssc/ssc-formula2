import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { text } from '@kadira/storybook-addon-knobs';

import TextBox from '../src/components/TextBox';

let textBoxRef = null;

storiesOf('TextBox', module)
  .addWithInfo('default', () => (
    <TextBox
      onChange={action('TextBox::onChange')}
      onSubmit={action('TextBox::onSubmit')}
    />
  ))
  .addWithInfo('init value', () => (
    <TextBox
      value={'foo'}
      onChange={action('TextBox::onChange')}
      onSubmit={action('TextBox::onSubmit')}
    />
  ))
  .addWithInfo('update value prop', () => (
    <TextBox
      value={text('TextBox.props.value', 'old')}
      onChange={action('TextBox::onChange')}
      onSubmit={action('TextBox::onSubmit')}
    />
  ))
  .addWithInfo('insert text', () => (
    <div>
      <TextBox
        ref={(c) => { textBoxRef = c; }}
        value={'foo'}
        onChange={action('TextBox::onChange')}
        onSubmit={action('TextBox::onSubmit')}
      />
      <button
        onClick={() => {
          textBoxRef.insertText('test');
        }}
      >插入</button>
    </div>
  ));
