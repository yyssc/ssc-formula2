import React from 'react';
import { forbidExtraProps } from 'airbnb-prop-types';
import { Tabs, Tab } from 'react-bootstrap';

const propTypes = forbidExtraProps({
});

export const defaultProps = {
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
          {/* <Tab eventKey={'函数'} title="函数">Tab 1 content</Tab>*/}
          <Tab eventKey={'单据字段'} title="单据字段">Tab 2 content</Tab>
          <Tab eventKey={'固定值'} title="固定值">Tab 3 content</Tab>
          <Tab eventKey={'档案转换'} title="档案转换">Tab 3 content</Tab>
          {/* <Tab eventKey={'环境变量'} title="环境变量">Tab 3 content</Tab>*/}
        </Tabs>
      </div>
    );
  }
}

FormulaTabs.propTypes = propTypes;
FormulaTabs.defaultProps = defaultProps;
