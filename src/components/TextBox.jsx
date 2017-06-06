import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import { Grid, Row, Col, FormGroup, FormControl, Button, ButtonToolbar } from 'react-bootstrap';

const propTypes = forbidExtraProps({
  onSubmit: PropTypes.func,
  value: PropTypes.string,
});

export const defaultProps = {
  onSubmit: () => {},
  value: '',
};


export default class TextBox extends React.Component {
  constructor(props) {
    super(props);

    this.placeholder = '请输入...';
    this.state = {
      value: props.value,
    };

    this.handleChange = this.handleChange.bind(this);
  }

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

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <Grid fluid>
          <Row>
            <Col xs={12} md={10}>
              <FormGroup controlId="formControlsTextarea">
                {/* <ControlLabel>Textarea</ControlLabel>*/}
                <FormControl
                  componentClass="textarea"
                  inputRef={(c) => { this.textarea = c; }}
                  placeholder={this.placeholder}
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col xs={12} md={2}>
              <ButtonToolbar>
                <Button
                  block
                  onClick={() => {
                    this.props.onSubmit(this.state.value);
                  }}
                >确定</Button>
                <Button
                  block
                  onClick={() => {}}
                >取消</Button>
                <Button
                  block
                  onClick={() => {}}
                >验证</Button>
                <Button
                  block
                  onClick={() => {
                    this.textarea.select();
                  }}
                >全选</Button>
                <Button
                  block
                  onClick={() => {
                    this.setState({
                      value: '',
                    });
                  }}
                >清空</Button>
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
