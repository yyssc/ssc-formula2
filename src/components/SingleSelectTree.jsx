import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import Tree, { TreeNode } from 'rc-tree';

import treeDataShape from '../shapes/treeDataShape';
import findPath from '../utils/findPath';

const propTypes = forbidExtraProps({
  /**
   * 选择一个节点回调
   * ```js
   * function onSelect(
   *   Object nodeData // 节点上承载的数据
   * )
   * ```
   */
  onSelect: PropTypes.func,
  /**
   * 被选中的节点的key属性
   */
  selectedKey: PropTypes.string,
  /**
   * 以JSON表示的树的数据
   */
  treeData: treeDataShape.isRequired,
});

export const defaultProps = {
  onSelect: () => {},
  selectedKey: null,
};

// TODO 转移到基础组件库，比如ssc-grid

export default class SingleSelectTree extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expandedKeys: [props.treeData[0].key],
      autoExpandParent: true,
      selectedKeys: [props.selectedKey],
    };

    this.onExpand = this.onExpand.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
  }

  /**
   *
   *
   * @param {any} nextProps
   *
   * @memberof FormulaTree
   */
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedKey !== this.state.selectedKeys[0]) {
      this.setState({
        selectedKeys: [nextProps.selectedKey],
      });
    }
  }

  /**
   *
   *
   * @param {any} nextProps
   * @param {any} nextState
   *
   * @memberof FormulaTree
   */
  // shouldComponentUpdate() {
  // }

  /**
   *
   *
   * @param {any} prevProps
   * @param {any} prevState
   *
   * @memberof FormulaTree
   */
  componentDidUpdate() {
  }

  onExpand(expandedKeys) {
    // console.log('onExpand', expandedKeys);
    // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded chilren keys.
    this.setState({
      expandedKeys,
      autoExpandParent: false,
    });
  }

  onSelect(selectedKeys, info) {
    // console.log('onSelect', selectedKeys, info);
    this.setState({
      selectedKeys,
    });
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
    this.props.onSelect(info.node.props.nodeData);
  }

  render() {
    const loop = data => data.map((item) => {
      if (item.children) {
        return (
          <TreeNode
            key={item.key}
            title={item.title}
            code={item.code}
            nodeData={item}
          >
            {loop(item.children)}
          </TreeNode>
        );
      }
      return (
        <TreeNode
          key={item.key}
          title={item.title}
          code={item.code}
          nodeData={item}
        />
      );
    });
    return (
      <div className="single-select-tree">
        <Tree
          showLine
          onExpand={this.onExpand}
          expandedKeys={this.state.expandedKeys}
          autoExpandParent={this.state.autoExpandParent}
          onSelect={this.onSelect}
          selectedKeys={this.state.selectedKeys}
        >
          {loop(this.props.treeData)}
        </Tree>
      </div>
    );
  }

}

SingleSelectTree.propTypes = propTypes;
SingleSelectTree.defaultProps = defaultProps;

/**
 * 根据节点的code来搜索节点所在树中的路径
 * @param {string} nodeCode 节点数据中的code，比如节点对象是
 * ```js
 * {title:'补助金额标准',key:'G001ZM0000BASE000DEF00000ATT00000045',code:'subsidyUnits',name:'补助金额标准'}
 * ```
 * 那么nodeCode应该是`subsidyUnits`
 * @param {Object} treeData 树的数据
 * @return {string}
 */
SingleSelectTree.findPath = (nodeCode, treeData) => findPath(nodeCode, treeData)
  .map(n => n.code)
  .filter(code => code.trim() !== '')
  .reverse()
  .join('.');
