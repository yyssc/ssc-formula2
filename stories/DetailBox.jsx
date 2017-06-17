import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { text } from '@kadira/storybook-addon-knobs';

import DetailBox from '../src/components/DetailBox';

storiesOf('DetailBox', module)
  .addWithInfo('default', () => (
    <DetailBox
      details={['some text...']}
    />
  ))
  .addWithInfo('update text prop', () => (
    <DetailBox
      details={[text('DetailBox.props.text', 'change text...')]}
    />
  ));
