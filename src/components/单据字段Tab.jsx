/* eslint-disable linebreak-style,react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';

import SearchBox from './SearchBox';
import SingleSelectTree from './SingleSelectTree';
import DetailBox from './DetailBox';
import treeDataShape from '../shapes/treeDataShape';

const propTypes = forbidExtraProps({
  treeData: treeDataShape.isRequired,
  /**
   * function (
   *   string path, // 节点在树上的完整路径，比如`root.parent.child`
   * )
   */
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
    this.handleSelect = this.handleSelect.bind(this);
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
    // console.log('search', this.search(searchText));
    this.setState({
      matchResults: this.search(searchText),
    });
    this.resetIndex();
  }

  /**
   * 选择一个节点回调
   * ```js
   * function onTreeSelect(
   *   string path // 节点所在tree的路径，以小数点将节点名称拼接起来，比如parent.child
   * )
   * ```
   */
  handleSelect(nodeData) {
    // const path = SingleSelectTree.findPath(nodeData.code, this.props.treeData);
    const path = nodeData.key.substr(nodeData.key.indexOf('.') + 1);
    // ========================================================================
    // `info.node`是TreeNode的实例，这个对象很复杂，不要直接向上抛
    // 另外发现一个"Storybook Addon Actions"的bug，就是当使用如下代码的时候
    // ```js
    // <FormulaTree
    //   treeData={json}
    //   onSelect={action('FormulaTree::onSelect')}
    // />
    // ```
    // action()会将onSelect()的参数先格式化一下，然后在打印在页面上的"Action Logger"中
    // 可能是格式化期间的一个bug，导致了浏览器当前标签页卡死了，应该是因为js中存在死循环了，
    // 这是由于onSelect的参数是一个js object，可能存在循环嵌套的问题
    // ========================================================================
    // this.props.onSelect(info.node);
    this.props.onTreeSelect(path);
  }

  render() {
    return (
      <div>
        <SearchBox
          onClick={this.handleFindNext}
          onChange={this.handleSearchBoxChange}
        />
        <SingleSelectTree
          treeData={this.props.treeData}
          selectedKey={this.getSelectedNodeKey()}
          onSelect={this.handleSelect}
        />
        <DetailBox
          details={['展示详细信息...']}
        />
      </div>
    );
  }
}

单据字段Tab.propTypes = propTypes;
单据字段Tab.defaultProps = defaultProps;
