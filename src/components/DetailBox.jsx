/* eslint-disable linebreak-style,linebreak-style,react/jsx-no-comment-textnodes,react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';

const propTypes = forbidExtraProps({
  details: PropTypes.arrayOf(PropTypes.string),
});

export const defaultProps = {
  details: [],
};

export default class DetailBox extends React.Component {
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
   * @memberof DetailBox
   */
  componentWillReceiveProps() {
  }

  /**
   *
   *
   * @param {any} nextProps
   * @param {any} nextState
   *
   * @memberof DetailBox
   */
  // shouldComponentUpdate() {
  // }

  /**
   *
   *
   * @param {any} prevProps
   * @param {any} prevState
   *
   * @memberof DetailBox
   */
  componentDidUpdate() {
  }

  render() {
    const { details } = this.props;
    return (
      <div className="detail-box">
        <hr />
        {
          details.map(detail => (
            <p key={detail}>{detail}</p>
          ))
        }
      </div>
    );
  }
}

DetailBox.propTypes = propTypes;
DetailBox.defaultProps = defaultProps;
