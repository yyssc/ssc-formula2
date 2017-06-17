import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';

import SearchBox from './SearchBox';
import FormulaTree from './FormulaTree';
import DetailBox from './DetailBox';
import treeDataShape from '../shapes/treeDataShape';

const propTypes = forbidExtraProps({
  treeData: treeDataShape.isRequired,
  onTreeSelect: PropTypes.func,
});

export const defaultProps = {
  onTreeSelect: () => {},
};


export default class 单据字段Tab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      matchResults: [],
      currentSelectedIndex: 0,
    };

    this.handleFindNext = this.handleFindNext.bind(this);
    this.handleSearchBoxChange = this.handleSearchBoxChange.bind(this);
  }

  componentDidMount() {
  }

  /**
   *
   *
   * @param {any} nextProps
   *
   * @memberof 单据字段Tab
   */
  componentWillReceiveProps() {
  }

  /**
   *
   *
   * @param {any} nextProps
   * @param {any} nextState
   *
   * @memberof 单据字段Tab
   */
  // shouldComponentUpdate() {
  // }

  /**
   *
   *
   * @param {any} prevProps
   * @param {any} prevState
   *
   * @memberof 单据字段Tab
   */
  componentDidUpdate() {
  }

  getSelectedNodeKey() {
    const { matchResults, currentSelectedIndex } = this.state;
    if (matchResults.length > 0) {
      return matchResults[currentSelectedIndex].key;
    }
    return null;
  }

  /**
   * Search for text in items
   * @param {any} text
   * @returns {Array}
   * @memberof 档案转换Tab
   */
  search(text) {
    if (text === '') {
      return [];
    }
    return this.props.treeData[0].children.filter((child) => {
      if (child.title.indexOf(text) !== -1) {
        return true;
      }
      return false;
    });
  }

  /**
   * 寻找下一个匹配项目
   * @param {string} searchText 文本框中的值
   * @memberof 单据字段Tab
   */
  handleFindNext() {
    const { length } = this.state.matchResults;
    if (length < 2) {
      return null;
    }
    const currentIdx = this.state.currentSelectedIndex;
    if (currentIdx < length - 1) {
      this.increaseIndex();
    } else {
      this.resetIndex();
    }
    return null;
  }

  increaseIndex() {
    this.setState({
      currentSelectedIndex: this.state.currentSelectedIndex + 1,
    });
  }

  resetIndex() {
    this.setState({
      currentSelectedIndex: 0,
    });
  }

  /**
   * 定位框的内容发生变化的时候
   * @param {any} searchText
   * @memberof 单据字段Tab
   */
  handleSearchBoxChange(searchText) {
    console.log('search', this.search(searchText));
    this.setState({
      matchResults: this.search(searchText),
    });
    this.resetIndex();
  }

  render() {
    return (
      <div>
        <SearchBox
          onClick={this.handleFindNext}
          onChange={this.handleSearchBoxChange}
        />
        <FormulaTree
          treeData={this.props.treeData}
          selectedKey={this.getSelectedNodeKey()}
          onSelect={this.props.onTreeSelect}
        />
        <DetailBox
          text={['展示详细信息...']}
        />
      </div>
    );
  }
}

单据字段Tab.propTypes = propTypes;
单据字段Tab.defaultProps = defaultProps;
