/* eslint-disable linebreak-style */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import SingleSelectTree from '../../src/components/SingleSelectTree';
import treeData from '../TreeData';

describe('SingleSelectTree', () => {
  describe('#render', () => {
    it('is .single-select-tree class', () => {
      const wrapper = shallow(
        <SingleSelectTree
          treeData={treeData}
          selectedKey={null}
          onSelect={() => {}}
        />,
      );
      expect(wrapper.is('.single-select-tree')).to.equal(true);
    });
  });
});
