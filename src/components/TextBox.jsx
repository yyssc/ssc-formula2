import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import { Grid, Row, Col, FormGroup, FormControl, Button, ButtonToolbar } from 'react-bootstrap';

const propTypes = forbidExtraProps({
  onSubmit: PropTypes.func,
});

export const defaultProps = {
  onSubmit: () => {},
};


export default class TextBox extends React.Component {
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
   * @memberof TextBox
   */
  componentWillReceiveProps() {
  }

  /**
   *
   *
   * @param {any} nextProps
   * @param {any} nextState
   *
   * @memberof TextBox
   */
  // shouldComponentUpdate() {
  // }

  /**
   *
   *
   * @param {any} prevProps
   * @param {any} prevState
   *
   * @memberof TextBox
   */
  componentDidUpdate() {
  }

  render() {
    return (
      <div>
        <Grid fluid>
          <Row>
            <Col xs={12} md={10}>
              <FormGroup controlId="formControlsTextarea">
                {/* <ControlLabel>Textarea</ControlLabel>*/}
                <FormControl componentClass="textarea" placeholder="textarea" />
              </FormGroup>
            </Col>
            <Col xs={12} md={2}>
              <ButtonToolbar>
                <Button block onClick={() => { this.props.onSubmit(); }}>确定</Button>
                <Button block>取消</Button>
                <Button block>验证</Button>
                <Button block>全选</Button>
                <Button block>清空</Button>
              </ButtonToolbar>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

TextBox.propTypes = propTypes;
TextBox.defaultProps = defaultProps;
