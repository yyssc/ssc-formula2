/* eslint-disable linebreak-style */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import DetailBox from '../../src/components/DetailBox';

describe('Formula', () => {
  describe('#render', () => {
    it('is .Formula class', () => {
      const wrapper = shallow(
        <DetailBox
          details={['some text...']}
        />,
      );
      expect(wrapper.is('.detail-box')).to.equal(true);
    });
  });
});
