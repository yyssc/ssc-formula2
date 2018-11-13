/* eslint-disable linebreak-style */
import React from 'react';
import { PropTypes } from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';

import SearchBox from './SearchBox';
import SelectList from './SelectList';
import ReferListsBox from './ReferListsBox';

import 档案转换ItemsShape from '../shapes/档案转换ItemsShape';
import treeDataShape from '../shapes/treeDataShape';

const propTypes = forbidExtraProps({
  items: 档案转换ItemsShape.isRequired,
  onInsert: PropTypes.func.isRequired,
  treeData: treeDataShape.isRequired,
});

export const defaultProps = {
};


export default class 档案转换Tab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSelectedIndex: 0,
      matchResults: [],
      refers: [],
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
   * @memberof 档案转换Tab
   */
  componentWillReceiveProps() {
  }

  /**
   *
   *
   * @param {any} nextProps
   * @param {any} nextState
   *
   * @memberof 档案转换Tab
   */
  // shouldComponentUpdate() {
  // }

  /**
   *
   *
   * @param {any} prevProps
   * @param {any} prevState
   *
   * @memberof 档案转换Tab
   */
  componentDidUpdate() {
  }

  getSelectedItemId() {
    if (this.state.matchResults.length > 0) {
      return this.state.matchResults[this.state.currentSelectedIndex].id;
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
    return this.props.items.filter((item) => {
      if (item.name.indexOf(text) !== -1) {
        return true;
      }
      return false;
    });
  }

  /**
   * 寻找下一个匹配项目
   * @param {string} searchText 文本框中的值
   * @memberof 档案转换Tab
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
   * @param {any} event
   * @memberof 档案转换Tab
   */
  handleSearchBoxChange(searchText) {
    this.setState({
      matchResults: this.search(searchText),
    });
    this.resetIndex();
  }

  /**
   * 更新ReferListsBox组件内容
   * @param {any} selectedItemObj
   * @memberof 档案转换Tab
   */
  updateReferListsBox(selectedItemObj) {
    const newRefers = [];
    let index = 1;
    let classType;
    // 遍历classtype1~classtype98
    for (; index < 99; index += 1) {
      classType = selectedItemObj[`classtype${index}`];
      if (selectedItemObj[`classtype${index}`] === null) {
        break;
      }
      newRefers.push(classType);
    }
    // 另外一种遍历所有classtype的方法
    // Object.keys(selectedItemObj).forEach((key) => {
    //   // key需要是classtype加数字的形式
    //   if (/^classtype\d$/.exec(key) !== null) {
    //     // 有可能是null
    //     if (selectedItemObj[key] !== null) {
    //       newRefers.push(selectedItemObj[key]);
    //     }
    //   }
    // });
    this.setState({
      refers: newRefers,
      selectedItemObj, // TODO 需要从本方法中拆分出去
    });
  }

  handleSelect(selectedItemObj) {
    this.updateReferListsBox(selectedItemObj);
  }

  render() {
    return (
      <div>
        <SearchBox
          onClick={this.handleFindNext}
          onChange={this.handleSearchBoxChange}
        />
        <SelectList
          activeKey={this.getSelectedItemId()}
          items={this.props.items}
          onSelect={this.handleSelect}
        />
        <ReferListsBox
          refers={this.state.refers}
          treeData={this.props.treeData}
          onInsert={(refersValue) => {
            this.props.onInsert(this.state.selectedItemObj, refersValue);
          }}
        />
      </div>
    );
  }
}

档案转换Tab.propTypes = propTypes;
档案转换Tab.defaultProps = defaultProps;
