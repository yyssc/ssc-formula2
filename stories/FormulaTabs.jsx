import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import FormulaTabs from '../src/components/FormulaTabs';
import json from './单据字段Data';
import 档案转换ItemsData from './档案转换Data';

const 单据字段TreeData = json;

storiesOf('FormulaTabs', module)
  .addWithInfo('default', () => (
    <FormulaTabs
      单据字段TreeData={单据字段TreeData}
      固定值ReferDataUrl="http://127.0.0.1:3009/refbase_ctr/queryRefJSON"
      档案转换ItemsData={档案转换ItemsData}
      on档案值ReferChange={action('FormulaTabs::on档案值ReferChange')}
      on单据字段TreeSelect={(o) => {
        // 由于o对象存在nested循环，使用action直接print的时候会陷入死循环
        console.log('FormulaTabs::on单据字段TreeSelect', o);
      }}
      on档案转换Insert={action('FormulaTabs::on档案转换Insert')}
    />
  ));
