import React from 'react';
import { forbidExtraProps } from 'airbnb-prop-types';

const propTypes = forbidExtraProps({
});

export const defaultProps = {
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
        TextBox
      </div>
    );
  }
}

TextBox.propTypes = propTypes;
TextBox.defaultProps = defaultProps;
