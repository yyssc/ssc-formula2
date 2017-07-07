import React from 'react';
import { storiesOf } from '@kadira/storybook';
// import { text } from '@kadira/storybook-addon-knobs';

import ReferListsBox from '../src/components/ReferListsBox';

storiesOf('ReferListsBox', module)
  .addWithInfo('default', () => (
    <ReferListsBox
      refers={[
        {
          id: 'G001ZM0000BASEDOCDEPT000000000000000',
          code: 'dept',
          name: '部门',
        },
      ]}
    />
  ));
