import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { ReferList } from 'yzb-comp';
import update from 'immutability-helper';

const propTypes = forbidExtraProps({
  refers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })),
  onInsert: PropTypes.func.isRequired,
});

export const defaultProps = {
  refers: [],
};

const contextTypes = {
  referDataUrl: PropTypes.string.isRequired,
};

export default class ReferListsBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refersValue: {},
    };
  }

  componentDidMount() {
  }

  /**
   * @param {any} nextProps
   * @memberof ReferListsBox
   */
  componentWillReceiveProps(nextProps) {
    if (nextProps.refers !== this.props.refers) {
      this.clearRefersValue();
    }
  }

  /**
   * @param {any} nextProps
   * @param {any} nextState
   * @memberof ReferListsBox
   */
  // shouldComponentUpdate() {
  // }

  /**
   * @param {any} prevProps
   * @param {any} prevState
   * @memberof ReferListsBox
   */
  componentDidUpdate() {
  }

  handleInsert() {
    this.props.onInsert(this.state.refersValue);
  }

  clearRefersValue() {
    this.setState({
      refersValue: {},
    });
  }

  render() {
    const leftCols = { lg: 6, md: 6 };
    const rightCols = { lg: 6, md: 6 };

    return (
      <div>
        <hr />
        <Grid fluid>
          <Row>
            <Col {...leftCols}>
              {
                this.props.refers.map(refer => (
                  <div key={refer.id}>
                    {refer.name}
                    <ReferList
                      referDataUrl={this.context.referDataUrl}
                      referConditions={{
                        refCode: refer.code,
                        refType: 'table',
                        displayFields: ['id', 'code', 'name'],
                      }}
                      onChange={(selected) => {
                        this.setState(ReferListsBox.updateFieldValue(refer.id, selected));
                      }}
                      onBlur={() => {}}
                    />
                  </div>
                ))
              }
            </Col>
            <Col {...rightCols}>
              <button onClick={() => { this.handleInsert(); }}>插入</button>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

ReferListsBox.propTypes = propTypes;
ReferListsBox.defaultProps = defaultProps;
ReferListsBox.contextTypes = contextTypes;

/**
 * 更新指定id的参照的值
 * @param {string} fieldId
 * @param {string} value
 */
ReferListsBox.updateFieldValue = (fieldId, value) => prevState => (
  update(prevState, {
    refersValue: {
      [fieldId]: { $set: value },
    },
  })
);
