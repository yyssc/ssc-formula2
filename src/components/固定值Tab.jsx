/* eslint-disable linebreak-style,react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import { Refers } from 'ssc-refer';

import { FilterAccSubjectRefer, ReferList } from 'yzb-comp';

/**
 * 郭老师说暂时使用doctype，不过目前（）后端暂时没有测试数据提供
 * 所以这里提供一个接口，让外面组件可以使用其他比如`refCode: 'entity'`进行测试
// eslint-disable-next-line linebreak-style
 */
const 档案RefCode = 'entity';

const propTypes = forbidExtraProps({
  /**
   * 档案值参照发生变化的时候回调
   * ```js
   * function on档案值ReferChange(
   *   Object selected, // 如果没有选中项，则返回undefined
   * )
   * ```
   */
  on档案值ReferChange: PropTypes.func.isRequired,
});

export const defaultProps = {
};

// TODO
// 使用https://github.com/acdlite/recompose 提供的withContext和getContext方法
// 来取消在组件中直接使用this.context.foo的形式
// 具体参照https://medium.com/react-ecosystem/how-to-handle-react-context-a7592dfdcbc

const contextTypes = {
  /**
   * 参照的服务器地址
   * 参照组件<Refers>内部可以发起请求
   * http://127.0.0.1:3009/refbase_ctr/queryRefJSON
   */
  referDataUrl: PropTypes.string.isRequired,
  /**
   * 类型为string|null
   */
  固定值档案值RefCode: PropTypes.string,
  referFunCode: PropTypes.string,
};

export default class 固定值Tab extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      档案值RefCode: context.固定值档案值RefCode, // string|null
    };

    this.handle档案ReferChange = this.handle档案ReferChange.bind(this);
    this.handle档案值ReferChange = this.handle档案值ReferChange.bind(this);
  }

  componentDidMount() {
  }

  /**
   *
   *
   * @param {any} nextProps
   *
   * @memberof 固定值Tab
   */
  componentWillReceiveProps() {
  }

  /**
   *
   *
   * @param {any} nextProps
   * @param {any} nextState
   *
   * @memberof 固定值Tab
   */
  // shouldComponentUpdate() {
  // }

  /**
   *
   *
   * @param {any} prevProps
   * @param {any} prevState
   *
   * @memberof 固定值Tab
   */
  componentDidUpdate() {
  }

  handle档案ReferChange(selected) {
    if (selected.length === 0) {
      this.setState({
        档案值RefCode: null,
      });
    } else {
      this.setState({
        档案值RefCode: selected[0].code,
      });
    }
  }

  handle档案值ReferChange(selected) {
    this.props.on档案值ReferChange(selected, this.state.档案值RefCode);
  }

  render档案值Refer() {
    const 档案值ReferConditions = {
      refCode: this.state.档案值RefCode,
      refType: 'list',
      displayFields: ['id', 'code', 'name'],
      funcode: this.context.referFunCode,
    };
    // if (this.context.referFilterCondition) {
    //   档案值ReferConditions.filterCondition = this.context.档案值ReferConditions;
    // }
    switch (this.state.档案值RefCode) {
      default:
      case null:
        break;
      // case 'attribute':
      //   档案值ReferConditions.convertcol = '{name:displayName}';
      //   档案值ReferConditions.fields = ['id', 'displayName'];
      //   档案值ReferConditions.displayFields = ['id', 'displayName'];
      //   break;
      // case 'entity':
      //   // http://git.yonyou.com/sscplatform/FC/issues/55
      //   // 郭老师说对于参照实体的应该特殊处理
      //   // 赵老师给出了特殊处理的方法就是添加`convertcol`参数
      //   档案值ReferConditions.convertcol = '{name:displayName}';
      //   // http://git.yonyou.com/sscplatform/FC/issues/55#note_53358
      //   // 按照赵老师说的，还需要添加几个参数
      //   档案值ReferConditions.fields = ['id', 'entityName', 'displayName'];
      //   档案值ReferConditions.displayFields = ['id', 'displayName'];
      //   break;
      case 'accsubject':
        return (
          <FilterAccSubjectRefer
            referDataUrl={this.context.referDataUrl}
            referConditions={档案值ReferConditions}
            disabled={this.state.档案值RefCode === null}
            onChange={this.handle档案值ReferChange}
          />
        );
    }
    return (
      <ReferList
        referDataUrl={this.context.referDataUrl}
        referConditions={档案值ReferConditions}
        disabled={this.state.档案值RefCode === null}
        onChange={this.handle档案值ReferChange}
        onBlur={() => {}}
      />
    );
  }

  render() {
    const 档案ReferConditions = {
      refCode: 档案RefCode,
      refType: 'list',
      funcode: this.context.referFunCode,
      displayFields: ['id', 'code', 'name'],
    };
    // if (this.context.referFilterCondition) {
    //   档案ReferConditions.filterCondition = this.context.referFilterCondition;
    // }
    return (
      <div>
        档案
        <Refers
          emptyLabel={''}
          labelKey="name"
          onChange={this.handle档案ReferChange}
          placeholder="请选择..."
          referConditions={档案ReferConditions}
          referDataUrl={this.context.referDataUrl}
          referType="list"
          defaultSelected={[]}
        />
        档案值
        {
          this.render档案值Refer()
        }
      </div>
    );
  }
}

固定值Tab.propTypes = propTypes;
固定值Tab.defaultProps = defaultProps;
固定值Tab.contextTypes = contextTypes;
