import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import SingleSelectTree from '../../src/components/SingleSelectTree';
import treeData from '../../stories/单据字段Data';

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
