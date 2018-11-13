/* eslint-disable linebreak-style,react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';

const propTypes = forbidExtraProps({
  /**
   * 返回变化之后的值
   */
  onChange: PropTypes.func,
  /**
   * 点击定位按钮的时候，返回当前文本框中的内容
   */
  onClick: PropTypes.func,
  placeholder: PropTypes.string,
});

export const defaultProps = {
  onChange: () => {},
  onClick: () => {},
  placeholder: '',
};


export default class SearchBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
  }

  /**
   *
   *
   * @param {any} nextProps
   *
   * @memberof SearchBox
   */
  componentWillReceiveProps() {
  }

  /**
   *
   *
   * @param {any} nextProps
   * @param {any} nextState
   *
   * @memberof SearchBox
   */
  // shouldComponentUpdate() {
  // }

  /**
   *
   *
   * @param {any} prevProps
   * @param {any} prevState
   *
   * @memberof SearchBox
   */
  componentDidUpdate() {
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({
      value,
    });
    this.props.onChange(value);
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.props.onClick(this.state.value);
      event.preventDefault();
    }
  }

  render() {
    return (
      <div>
        <Form inline>
          <span>定位</span>
          {' '}
          <FormGroup>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder={this.props.placeholder}
              onChange={this.handleChange}
              onKeyPress={this.handleKeyPress}
            />
          </FormGroup>
          {' '}
          <Button
            onClick={() => {
              this.props.onClick(this.state.value);
            }}
          >
            确定
          </Button>
        </Form>
      </div>
    );
  }
}

SearchBox.propTypes = propTypes;
SearchBox.defaultProps = defaultProps;
