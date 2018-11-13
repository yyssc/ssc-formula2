/* eslint-disable linebreak-style */
import { expect } from 'chai';

import findPath from '../../src/utils/findPath';
import data from '../../stories/单据字段Data';

describe('findPath', () => {
  it('concat path', () => {
    const path = findPath('subsidyUnits', data)
      .map(node => node.code)
      .filter(code => code.trim() !== '')
      .reverse()
      .join('.');
    expect(path).to.equal('subsidy.subsidyUnits');
    expect(false).to.equal(false);
  });
});
