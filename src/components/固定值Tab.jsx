import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import { Refers } from 'ssc-refer2';

/**
 * 郭老师说暂时使用doctype，不过目前（）后端暂时没有测试数据提供
 * 所以这里提供一个接口，让外面组件可以使用其他比如`refCode: 'entity'`进行测试
 */
const 档案RefCode = 'entity';

const propTypes = forbidExtraProps({
  /**
   * 档案值参照发生变化的时候回调
   */
  on档案值ReferChange: PropTypes.func.isRequired,
  /**
   * 参照组件<Refers>内部可以发起请求
   * http://127.0.0.1:3009/refbase_ctr/queryRefJSON
   */
  referDataUrl: PropTypes.string.isRequired,
  /**
   * 临时方案，由外面传进来
   */
  档案值RefCode: PropTypes.string,
});

export const defaultProps = {
  档案值RefCode: null,
};

export default class 固定值Tab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      档案值RefCode: props.档案值RefCode, // null,
    };

    this.handle档案ReferChange = this.handle档案ReferChange.bind(this);
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

  render() {
    const 档案ReferConditions = {
      refCode: 档案RefCode,
      refType: 'table',
      fields: [
        'id',
        'displayName',
        'entityName',
        'entityType',
        'fullClassName',
        'mainTableName',
      ],
      displayFields: ['id', 'entityName', 'displayName'],
      convertcol: '{code:entityName,name:displayName}',
    };
    const 档案值ReferConditions = {
      refCode: this.state.档案值RefCode,
      refType: 'table',
      displayFields: ['code', 'name', 'email'],
    };
    // http://git.yonyou.com/sscplatform/FC/issues/55
    // 郭老师说对于参照实体的应该特殊处理
    // 赵老师给出了特殊处理的方法就是添加`convertcol`参数
    if (this.state.档案值RefCode === 'entity') {
      档案值ReferConditions.convertcol = '{name:displayName}';
      // http://git.yonyou.com/sscplatform/FC/issues/55#note_53358
      // 按照赵老师说的，还需要添加几个参数
      档案值ReferConditions.fields = ['id', 'entityName', 'displayName'];
      档案值ReferConditions.displayFields = ['id', 'displayName'];
    }
    return (
      <div>
        档案
        <Refers
          emptyLabel={''}
          labelKey="name"
          onChange={this.handle档案ReferChange}
          placeholder="请选择..."
          referConditions={档案ReferConditions}
          referDataUrl={this.props.referDataUrl}
          referType="list"
          defaultSelected={[]}
        />
        档案值
        <Refers
          emptyLabel={''}
          labelKey="name"
          onChange={this.props.on档案值ReferChange}
          placeholder="请选择..."
          referConditions={档案值ReferConditions}
          referDataUrl={this.props.referDataUrl}
          referType="list"
          defaultSelected={[]}
          disabled={this.state.档案值RefCode === null}
          renderMenuItemChildren={option => (
            <div>
              <span>{option.code}{option.name}</span>
            </div>
          )}
          filterBy={['name', 'code']}
        />
      </div>
    );
  }
}

固定值Tab.propTypes = propTypes;
固定值Tab.defaultProps = defaultProps;
