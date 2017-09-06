/* eslint-disable react/jsx-pascal-case */

import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';

import 单据字段Tab from './单据字段Tab';
import 固定值Tab from './固定值Tab';
import 档案转换Tab from './档案转换Tab';
import treeDataShape from '../shapes/treeDataShape';
import 档案转换ItemsShape from '../shapes/档案转换ItemsShape';

const propTypes = forbidExtraProps({
  on档案值ReferChange: PropTypes.func.isRequired,
  on单据字段TreeSelect: PropTypes.func,
  on档案转换Insert: PropTypes.func.isRequired,
  /**
   * 单据字段标签页中的树的数据
   */
  单据字段TreeData: treeDataShape.isRequired,
  /**
   * 档案转换标签页中的树的数据
   */
  档案转换ItemsData: 档案转换ItemsShape.isRequired,
});

export const defaultProps = {
  on单据字段TreeSelect: () => {},
};


export default class FormulaTabs extends React.Component {
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
   * @memberof FormulaTabs
   */
  componentWillReceiveProps() {
  }

  /**
   *
   *
   * @param {any} nextProps
   * @param {any} nextState
   *
   * @memberof FormulaTabs
   */
  // shouldComponentUpdate() {
  // }

  /**
   *
   *
   * @param {any} prevProps
   * @param {any} prevState
   *
   * @memberof FormulaTabs
   */
  componentDidUpdate() {
  }

  render() {
    return (
      <div>
        <Tabs defaultActiveKey={'单据字段'} id="ssc-formula2">
          {/* <Tab eventKey={'函数'} title="函数">Tab 1 content</Tab> */}
          <Tab eventKey={'单据字段'} title="单据字段">
            <单据字段Tab
              treeData={this.props.单据字段TreeData}
              onTreeSelect={this.props.on单据字段TreeSelect}
            />
          </Tab>
          <Tab eventKey={'固定值'} title="固定值">
            <固定值Tab
              on档案值ReferChange={this.props.on档案值ReferChange}
            />
          </Tab>
          <Tab eventKey={'档案转换'} title="档案转换">
            <档案转换Tab
              items={this.props.档案转换ItemsData}
              treeData={this.props.单据字段TreeData}
              onInsert={this.props.on档案转换Insert}
            />
          </Tab>
          {/* <Tab eventKey={'环境变量'} title="环境变量">Tab 3 content</Tab> */}
        </Tabs>
      </div>
    );
  }
}

FormulaTabs.propTypes = propTypes;
FormulaTabs.defaultProps = defaultProps;
