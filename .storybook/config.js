import React from 'react';
import moment from 'moment';
import { configure, addDecorator, setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';
import { setOptions } from '@kadira/storybook-addon-options';
import '../css/styles.scss';

addDecorator((story) => {
  moment.locale('en');
  return (story());
});

function getLink(href, text) {
  return `<a href=${href} rel="noopener noreferrer" target="_blank">${text}</a>`;
}

const README = getLink('https://github.com/yyssc/ssc-formula2/blob/master/README.md', 'README');
const wrapperSource = getLink('https://github.com/yyssc/ssc-formula2/tree/master/examples', 'wrapper source');

const helperText = `All examples are built using a wrapper component that is not exported by
  ssc-formula2. Please see the ${README} for more information about minimal setup or explore
  the ${wrapperSource} to see how to integrate ssc-formula2 into your own app.`;

addDecorator(story => (
  <div>
    <div
      style={{
        background: '#fff',
        height: 6 * 8,
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        padding: '8px 40px 8px 8px',
        overflow: 'scroll',
      }}
    >
      <span dangerouslySetInnerHTML={{ __html: helperText }} />
    </div>

    <div style={{ marginTop: 7 * 8 }}>
      {story()}
    </div>
  </div>
));

setOptions({
  name: 'SSC-FORMULA2',
  url: 'https://github.com/yyssc/ssc-formula2',
});

function loadStories() {
  // require('../stories/DateRangePicker');
  // require('../stories/DateRangePicker_input');
  // require('../stories/DateRangePicker_calendar');
  // require('../stories/DateRangePicker_day');
  // require('../stories/SingleDatePicker');
  // require('../stories/SingleDatePicker_input');
  // require('../stories/SingleDatePicker_calendar');
  // require('../stories/SingleDatePicker_day');
  // require('../stories/DayPickerRangeController');
  // require('../stories/DayPicker');
  require('../stories/Formula');
  require('../stories/TextBox');
  require('../stories/FormulaTabs');
  require('../stories/DanJuZiDuan');
  require('../stories/SearchBox');
  require('../stories/DanJuZiDuanTree');
  require('../stories/固定值Tab');
}

setAddon(infoAddon);

configure(loadStories, module);
