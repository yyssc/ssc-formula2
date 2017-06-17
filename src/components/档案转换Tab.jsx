import React from 'react';
import { PropTypes } from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';

import SearchBox from './SearchBox';
import SelectList from './SelectList';
import DetailBox from './DetailBox';

import 档案转换ItemsShape from '../shapes/档案转换ItemsShape';

const propTypes = forbidExtraProps({
  items: 档案转换ItemsShape.isRequired,
  onSelect: PropTypes.func.isRequired,
});

export const defaultProps = {
};


export default class 档案转换Tab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSelectedIndex: 0,
      matchResults: [],
      details: [],
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
   * 更新DetailBox组件内容
   * @param {any} selectedItemObj
   * @memberof 档案转换Tab
   */
  updateDetailBox(selectedItemObj) {
    const newDetails = [];
    let index = 1;
    let classType;
    for (; index < 99; index += 1) {
      classType = selectedItemObj[`classtype${index}`];
      if (selectedItemObj[`classtype${index}`] === null) {
        break;
      }
      newDetails.push(classType.name);
    }
    this.setState({
      details: newDetails,
    });
  }

  handleSelect(selectedItemObj) {
    this.updateDetailBox(selectedItemObj);
    this.props.onSelect(selectedItemObj);
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
        <DetailBox
          details={this.state.details}
        />
      </div>
    );
  }
}

档案转换Tab.propTypes = propTypes;
档案转换Tab.defaultProps = defaultProps;
