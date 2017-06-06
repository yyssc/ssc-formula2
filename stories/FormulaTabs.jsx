import React from 'react';
import { storiesOf } from '@kadira/storybook';

import FormulaTabs from '../src/components/FormulaTabs';
import json from './单据字段Data';
import 档案转换Items from './档案转换Data';

const 单据字段TreeData = json;

storiesOf('FormulaTabs', module)
  .addWithInfo('default', () => (
    <FormulaTabs
      单据字段TreeData={单据字段TreeData}
      档案转换Items={档案转换Items}
      on单据字段TreeSelect={(o) => {
        console.log('FormulaTabs::on单据字段TreeSelect', o);
      }}
    />
  ));
