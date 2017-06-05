import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import Tree, { TreeNode } from 'rc-tree';
import 'rc-tree/assets/index.css';

const propTypes = forbidExtraProps({
  multiple: PropTypes.bool,
});

export const defaultProps = {
  multiple: true,
};

function spl(str) {
  return str.split('-');
}

function splitLen(str) {
  return str.split('-').length;
}

function isSibling(pos, pos1) {
  pos.pop();
  pos1.pop();
  return pos.join(',') === pos1.join(',');
}

function loopData(data, callback) {
  const loop = (d, level = 0) => {
    d.forEach((item, index) => {
      const pos = `${level}-${index}`;
      if (item.children) {
        loop(item.children, pos);
      }
      callback(item, index, pos);
    });
  };
  loop(data);
}

function getRadioSelectKeys(data, selectedKeys, key) {
  const res = [];
  const pkObjArr = [];
  const selPkObjArr = [];
  loopData(data, (item, index, pos) => {
    if (selectedKeys.indexOf(item.key) > -1) {
      pkObjArr.push([pos, item.key]);
    }
    if (key && key === item.key) {
      selPkObjArr.push(pos, item.key);
    }
  });
  const lenObj = {};
  const getPosKey = (pos, k) => {
    const posLen = splitLen(pos);
    if (!lenObj[posLen]) {
      lenObj[posLen] = [[pos, k]];
    } else {
      lenObj[posLen].forEach((pkArr, i) => {
        if (isSibling(spl(pkArr[0]), spl(pos))) {
          // 后来覆盖前者
          lenObj[posLen][i] = [pos, k];
        } else if (spl(pkArr[0]) !== spl(pos)) {
          lenObj[posLen].push([pos, k]);
        }
      });
    }
  };
  pkObjArr.forEach((pk) => {
    getPosKey(pk[0], pk[1]);
  });
  if (key) {
    getPosKey(selPkObjArr[0], selPkObjArr[1]);
  }

  Object.keys(lenObj).forEach((item) => {
    lenObj[item].forEach((i) => {
      if (res.indexOf(i[1]) === -1) {
        res.push(i[1]);
      }
    });
  });
  return res;
}

export function generateData(x = 3, y = 2, z = 1, gData = []) {
  // x：每一级下的节点总数。y：每级节点里有y个节点、存在子节点。z：树的level层级数（0表示一级）
  function _loop(_level, _preKey, _tns) {
    const preKey = _preKey || '0';
    const tns = _tns || gData;

    const children = [];
    for (let i = 0; i < x; i++) {
      const key = `${preKey}-${i}`;
      tns.push({ title: `${key}-label`, key: `${key}-key` });
      if (i < y) {
        children.push(key);
      }
    }
    if (_level < 0) {
      return tns;
    }
    const __level = _level - 1;
    children.forEach((key, index) => {
      tns[index].children = [];
      return _loop(__level, key, tns[index].children);
    });
  }
  _loop(z);
  return gData;
}

const gData = generateData();

export default class DanJuZiDuanTree extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // expandedKeys: getFilterExpandedKeys(gData, ['0-0-0-key']),
      expandedKeys: ['0-0-0-key'],
      autoExpandParent: true,
      // checkedKeys: ['0-0-0-0-key', '0-0-1-0-key', '0-1-0-0-key'],
      checkedKeys: ['0-0-0-key'],
      checkStrictlyKeys: { checked: ['0-0-1-key'], halfChecked: [] },
      selectedKeys: [],
      treeData: [],
    };
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

  onCheck(checkedKeys) {
    this.setState({
      checkedKeys,
    });
  }

  onCheckStrictly(checkedKeys, extra) {
    console.log(checkedKeys, extra);
    // const { checkedNodesPositions } = extra;
    // const pps = filterParentPosition(checkedNodesPositions.map(i => i.pos));
    // console.log(checkedNodesPositions.filter(i => pps.indexOf(i.pos) > -1).map(i => i.node.key));
    const cks = {
      checked: checkedKeys.checked || checkedKeys,
      halfChecked: [`0-0-${parseInt(Math.random() * 3, 10)}-key`],
    };
    this.setState({
      // checkedKeys,
      checkStrictlyKeys: cks,
      // checkStrictlyKeys: checkedKeys,
    });
  }

  onSelect(selectedKeys, info) {
    console.log('onSelect', selectedKeys, info);
    this.setState({
      selectedKeys,
    });
  }

  onRbSelect(selectedKeys, info) {
    let _selectedKeys = selectedKeys;
    if (info.selected) {
      _selectedKeys = getRadioSelectKeys(gData, selectedKeys, info.node.props.eventKey);
    }
    this.setState({
      selectedKeys: _selectedKeys,
    });
  }

  showModal() {
    this.setState({
      expandedKeys: ['0-0-0-key', '0-0-1-key'],
      checkedKeys: ['0-0-0-key'],
    });
    // simulate Ajax
    setTimeout(() => {
      this.setState({
        treeData: [...gData],
      });
    }, 2000);
  }

  triggerChecked() {
    this.setState({
      checkedKeys: [`0-0-${parseInt(Math.random() * 3, 10)}-key`],
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
              disableCheckbox={item.key === '0-0-0-key'}
            >
              {loop(item.children)}
            </TreeNode>
          );
        }
        return <TreeNode key={item.key} title={item.title} />;
      })
    );
    // console.log(getRadioSelectKeys(gData, this.state.selectedKeys));
    return (<div style={{ padding: '0 20px' }}>
      <h2>controlled</h2>
      <Tree
        checkable
        onExpand={this.onExpand}
        expandedKeys={this.state.expandedKeys}
        autoExpandParent={this.state.autoExpandParent}
        onCheck={this.onCheck}
        checkedKeys={this.state.checkedKeys}
        onSelect={this.onSelect}
        selectedKeys={this.state.selectedKeys}
      >
        {loop(gData)}
      </Tree>
      <button onClick={this.triggerChecked}>trigger checked</button>
    </div>);
  }

}

DanJuZiDuanTree.propTypes = propTypes;
DanJuZiDuanTree.defaultProps = defaultProps;
