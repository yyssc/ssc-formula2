import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { text } from '@kadira/storybook-addon-knobs';

import TextBox from '../src/components/TextBox';

let textBoxRef = null;

storiesOf('TextBox', module)
  .addWithInfo('default', () => (
    <TextBox
      onCancel={action('TextBox::onCancel')}
      onChange={action('TextBox::onChange')}
      onSubmit={action('TextBox::onSubmit')}
      onValidate={action('TextBox::onValidate')}
    />
  ))
  .addWithInfo('init value', () => (
    <TextBox
      value={'foo'}
      onCancel={action('TextBox::onCancel')}
      onChange={action('TextBox::onChange')}
      onSubmit={action('TextBox::onSubmit')}
      onValidate={action('TextBox::onValidate')}
    />
  ))
  .addWithInfo('update value prop', () => (
    <TextBox
      value={text('TextBox.props.value', 'old')}
      onCancel={action('TextBox::onCancel')}
      onChange={action('TextBox::onChange')}
      onSubmit={action('TextBox::onSubmit')}
      onValidate={action('TextBox::onValidate')}
    />
  ))
  .addWithInfo('insert text', () => (
    <div>
      <TextBox
        ref={(c) => { textBoxRef = c; }}
        value={'foo'}
        onCancel={action('TextBox::onCancel')}
        onChange={action('TextBox::onChange')}
        onSubmit={action('TextBox::onSubmit')}
        onValidate={action('TextBox::onValidate')}
      />
      <button
        onClick={() => {
          textBoxRef.insertText('test');
        }}
      >插入</button>
    </div>
  ));
