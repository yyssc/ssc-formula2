/* eslint-disable linebreak-style,react/forbid-prop-types */
// import 'rc-tree/assets/index.css';
import React, { PropTypes } from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import SingleSelectTree from './SingleSelectTree';
import DropdownTreeTrigger from './DropdownTreeTrigger';
import treeDataShape from '../shapes/treeDataShape';
// import './dropdown.less';

// By default dropdown overlay and input field all use this width
const DEFAULT_WIDTH = '400px';

const propTypes = {
  /**
   * The style for input field
   */
  inputStyle: PropTypes.object,
  onChange: PropTypes.func,
  /**
   * The style for dropdown tree overlay
   */
  overlayStyle: PropTypes.object,
  /**
   * The data of dropdown tree
   */
  treeData: treeDataShape.isRequired,
};

export const defaultProps = {
  inputStyle: {
    width: DEFAULT_WIDTH,
  },
  onChange: () => {},
  overlayStyle: {
    DEFAULT_WIDTH,
    maxHeight: '300px',
    overflow: 'auto',
  },
};

export default class DropdownTree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      sel: '',
    };
    this.onVisibleChange = this.onVisibleChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  onVisibleChange(visible) {
    this.setState({
      visible,
    });
  }

  onSelect(nodeData) {
    // console.log('selected: ', nodeData);
    this.setState({
      visible: false,
      sel: nodeData.title,
    });
    this.props.onChange(nodeData);
  }

  render() {
    // Show tree in overlay
    const overlay = (<div>
      <SingleSelectTree
        treeData={this.props.treeData}
        onSelect={this.onSelect}
      />
    </div>);

    return (
      <div className="dropdown-tree">
        <DropdownTreeTrigger
          trigger={['click']}
          onVisibleChange={this.onVisibleChange}
          visible={this.state.visible}
          overlay={overlay}
          overlayStyle={this.props.overlayStyle}
          animation="slide-up"
        >
          <FormControl
            type="text"
            value={this.state.sel}
            placeholder="点击输入框进行选择"
            style={this.props.inputStyle}
            onChange={(event) => {
              this.setState({
                sel: event.target.value,
              });
            }}
          />
        </DropdownTreeTrigger>
      </div>
    );
  }
}

DropdownTree.propTypes = propTypes;
DropdownTree.defaultProps = defaultProps;
