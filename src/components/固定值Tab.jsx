import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import { Refers } from 'ssc-refer2';

const propTypes = forbidExtraProps({
  /**
   * 档案初始值
   */
  refCode: PropTypes.string,
  /**
   * 参照组件<Refers>内部可以发起请求
   * http://127.0.0.1:3009/refbase_ctr/queryRefJSON
   */
  referDataUrl: PropTypes.string.isRequired,
});

export const defaultProps = {
  refCode: '',
};

export default class 固定值Tab extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

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

  render() {
    const referConditions = {
      refCode: this.props.refCode,
      refType: 'table',
      displayFields: ['code', 'name', 'email'],
    };
    return (
      <div>
        档案
        <Refers
          emptyLabel={''}
          labelKey="name"
          onChange={() => {}}
          placeholder="请选择..."
          referConditions={referConditions}
          referDataUrl={this.props.referDataUrl}
          referType="list"
          defaultSelected={[]}
        />
        档案值
        <Refers
          emptyLabel={''}
          labelKey="name"
          onChange={() => {}}
          placeholder="请选择..."
          referConditions={referConditions}
          referDataUrl={this.props.referDataUrl}
          referType="list"
          defaultSelected={[]}
        />
      </div>
    );
  }
}

固定值Tab.propTypes = propTypes;
固定值Tab.defaultProps = defaultProps;
