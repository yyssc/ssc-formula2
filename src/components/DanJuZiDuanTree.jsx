import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import Tree, { TreeNode } from 'rc-tree';
import 'rc-tree/assets/index.css';

const nodeShape = {
  title: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
};
nodeShape.children = PropTypes.arrayOf(PropTypes.shape(nodeShape));

const propTypes = forbidExtraProps({
  treeData: PropTypes.arrayOf(nodeShape).isRequired,
});

export const defaultProps = {
};

export default class DanJuZiDuanTree extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expandedKeys: [],
      autoExpandParent: true,
      selectedKeys: [],
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
   * @memberof DanJuZiDuanTree
   */
  componentWillReceiveProps() {
  }

  /**
   *
   *
   * @param {any} nextProps
   * @param {any} nextState
   *
   * @memberof DanJuZiDuanTree
   */
  // shouldComponentUpdate() {
  // }

  /**
   *
   *
   * @param {any} prevProps
   * @param {any} prevState
   *
   * @memberof DanJuZiDuanTree
   */
  componentDidUpdate() {
  }

  onExpand(expandedKeys) {
    console.log('onExpand', expandedKeys);
    // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded chilren keys.
    this.setState({
      expandedKeys,
      autoExpandParent: false,
    });
  }

  onSelect(selectedKeys, info) {
    console.log('onSelect', selectedKeys, info);
    this.setState({
      selectedKeys,
    });
  }

  render() {
    const loop = data => (
      data.map((item) => {
        if (item.children) {
          return (
            <TreeNode
              key={item.key}
              title={item.title}
            >
              {loop(item.children)}
            </TreeNode>
          );
        }
        return <TreeNode key={item.key} title={item.title} />;
      })
    );
    return (
      <div className="dan-ju-zi-duan-tree">
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

DanJuZiDuanTree.propTypes = propTypes;
DanJuZiDuanTree.defaultProps = defaultProps;
