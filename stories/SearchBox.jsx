import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import SearchBox from '../src/components/SearchBox';

storiesOf('SearchBox', module)
  .addWithInfo('default', () => (
    <SearchBox
      onChange={action('SearchBox::onChange')}
    />
  ))
  .addWithInfo('placeholder', () => (
    <SearchBox
      placeholder="Please input ..."
    />
  ))
  .addWithInfo('onLocate', () => (
    <SearchBox
      onLocate={action('SearchBox::onLocate')}
    />
  ));
