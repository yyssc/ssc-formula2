import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import Tree, { TreeNode } from 'rc-tree';
import 'rc-tree/assets/index.css';

import treeDataShape from '../shapes/treeDataShape';

const propTypes = forbidExtraProps({
  treeData: treeDataShape.isRequired,
  onSelect: PropTypes.func,
});

export const defaultProps = {
  onSelect: () => {},
};

export default class TreeNodeWrapper extends React.Component {
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
   * @memberof TreeNodeWrapper
   */
  componentWillReceiveProps() {
  }

  /**
   *
   *
   * @param {any} nextProps
   * @param {any} nextState
   *
   * @memberof TreeNodeWrapper
   */
  // shouldComponentUpdate() {
  // }

  /**
   *
   *
   * @param {any} prevProps
   * @param {any} prevState
   *
   * @memberof TreeNodeWrapper
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
    this.props.onSelect(info.node);
  }

  render() {
    return (
      <TreeNode
        key={this.props.key}
        title={this.props.title}
      >
      </TreeNode>
    );
  }

}

TreeNodeWrapper.propTypes = propTypes;
TreeNodeWrapper.defaultProps = defaultProps;
