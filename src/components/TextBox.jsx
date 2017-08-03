import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';

const propTypes = forbidExtraProps({
  /**
   * Press cancel button callback
   */
  onCancel: PropTypes.func,
  /**
   * Text changed callback
   */
  onChange: PropTypes.func,
  /**
   * Press submit button callback
   */
  onSubmit: PropTypes.func,
  /**
   * [Unknown Feature] Validation callback
   */
  onValidate: PropTypes.func,
  value: PropTypes.string,
});

export const defaultProps = {
  onCancel: () => {},
  onChange: () => {},
  onSubmit: () => {},
  onValidate: () => {},
  value: '',
};

/**
 * 文本框组件
 * 根据官网https://facebook.github.io/react/docs/refs-and-the-dom.html#when-to-use-refs
 * 本组件由于需要在textarea中进行selection操作，所以大量使用了Ref
 * Ref提供的方法：
 * - insertText
 * TODO 搜索一下google:"react editor"找到更高级的编辑器
 * @export
 * @class TextBox
 * @extends {React.Component}
 */
export default class TextBox extends React.Component {
  constructor(props) {
    super(props);

    this.placeholder = '请输入...';
    this.state = {
      value: props.value,
    };
  }

  componentDidMount() {
  }

  /**
   * @param {any} nextProps
   * @memberof TextBox
   */
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.value) {
      this.setState({
        value: nextProps.value,
      });
    }
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

  /**
   * 往文本框中插入文字
   * 直接从ssc-formula复制过来，没有仔细看其中的实现
   * 注意：本方法不会触发FormControl::onChange回调
   * @param {any} str
   * @memberof TextBox
   */
  insertText(str) {
    const textarea = this.textareaRef;
    if (document.selection) {
      const sel = document.selection.createRange();
      sel.text = str;
    } else if (typeof textarea.selectionStart === 'number' && typeof textarea.selectionEnd === 'number') {
      const startPos = textarea.selectionStart;
      const endPos = textarea.selectionEnd;
      let cursorPos = startPos;
      const tmpStr = textarea.value;
      textarea.value = tmpStr.substring(0, startPos) + str +
        tmpStr.substring(endPos, tmpStr.length);
      cursorPos += str.length;
      textarea.selectionStart = cursorPos;
      textarea.selectionEnd = cursorPos;
    } else {
      textarea.value += str;
    }
    this.handleChange(textarea.value);
  }

  clearText() {
    this.handleChange('');
  }

  handleChange(value) {
    this.setState({ value });
    this.props.onChange(value);
  }

  render() {
    // 让输入框高度自动
    // How can I make Bootstrap columns all the same height?
    // https://stackoverflow.com/a/22892773/4685522
    return (
      <div>
        <Grid fluid>
          <Row style={{ display: 'flex', flexWrap: 'wrap' }}>
            <Col xs={10} md={10}>
              <FormGroup controlId="formControlsTextarea" style={{ height: '100%' }}>
                <FormControl
                  style={{ height: '100%' }}
                  inputRef={(c) => { this.textareaRef = c; }}
                  componentClass="textarea"
                  placeholder={this.placeholder}
                  value={this.state.value}
                  onChange={(event) => {
                    this.handleChange(event.target.value);
                  }}
                />
              </FormGroup>
            </Col>
            <Col xs={2} md={2}>
              <ButtonToolbar>
                <Button
                  block
                  onClick={() => {
                    this.props.onSubmit(this.textareaRef.value);
                  }}
                >确定</Button>
                <Button
                  block
                  onClick={this.props.onCancel}
                >取消</Button>
                <Button
                  block
                  onClick={this.props.onValidate}
                >验证</Button>
                <Button
                  block
                  onClick={() => {
                    this.textareaRef.select();
                  }}
                >全选</Button>
                <Button
                  block
                  onClick={() => {
                    this.clearText();
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
