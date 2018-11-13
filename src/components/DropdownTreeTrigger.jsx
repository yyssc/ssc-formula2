/* eslint-disable linebreak-style */
// import 'rc-tree/assets/index.css';
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Trigger from 'rc-trigger';

const placements = {
  topLeft: {
    points: ['bl', 'tl'],
    overflow: {
      adjustX: 1,
      adjustY: 1,
    },
    offset: [0, -3],
    targetOffset: [0, 0],
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: {
      adjustX: 1,
      adjustY: 1,
    },
    offset: [0, 3],
    targetOffset: [0, 0],
  },
};

const propTypes = {
  minOverlayWidthMatchTrigger: PropTypes.bool,
  onVisibleChange: PropTypes.func,
  prefixCls: PropTypes.string,
  children: PropTypes.element.isRequired,
  transitionName: PropTypes.string,
  overlayClassName: PropTypes.string,
  // animation: PropTypes.any,
  animation: PropTypes.string,
  align: PropTypes.object,
  overlayStyle: PropTypes.object,
  placement: PropTypes.string,
  // trigger: PropTypes.array,
  trigger: PropTypes.arrayOf(PropTypes.string),
  visible: PropTypes.bool,
};

const defaultProps = {
  align: undefined,
  minOverlayWidthMatchTrigger: true,
  prefixCls: 'demo-dropdown-tree',
  trigger: ['hover'],
  overlayClassName: '',
  overlayStyle: {
    width: '200px',
    maxHeight: '300px',
    overflow: 'auto',
  },
  visible: false,
  onVisibleChange: () => {
  },
  placement: 'bottomLeft',
  transitionName: '',
  animation: '',
};

export default class DropdownTreeTrigger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: props.visible,
    };
    this.handleVisibleChange = this.handleVisibleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.afterVisibleChange = this.afterVisibleChange.bind(this);
  }

  componentWillReceiveProps(props) {
    if ('visible' in props) {
      this.setState({
        visible: props.visible,
      });
    }
  }

  getPopupElement() {
    const props = this.props;
    return React.cloneElement(props.overlay, {
      // prefixCls: `${props.prefixCls}-menu`,
      onClick: this.handleClick,
    });
  }

  handleClick(e) {
    const props = this.props;
    const overlayProps = props.overlay.props;
    if (!('visible' in props)) {
      this.setState({
        visible: false,
      });
    }
    if (overlayProps.onClick) {
      overlayProps.onClick(e);
    }
  }

  handleVisibleChange(v) {
    const props = this.props;
    if (!('visible' in props)) {
      this.setState({
        visible: v,
      });
    }
    this.props.onVisibleChange(v);
  }

  afterVisibleChange(visible) {
    if (visible && this.props.minOverlayWidthMatchTrigger) {
      const overlayNode = this.triggerRef.getPopupDomNode();
      const rootNode = ReactDOM.findDOMNode(this); // eslint-disable-line react/no-find-dom-node
      if (rootNode.offsetWidth > overlayNode.offsetWidth) {
        overlayNode.style.width = `${rootNode.offsetWidth}px`;
      }
    }
  }

  render() {
    const { prefixCls, children,
      transitionName, animation,
      align, placement,
      overlayClassName, overlayStyle,
      trigger } = this.props;
    return (
      <Trigger
        prefixCls={prefixCls}
        ref={(c) => {
          if (c) {
            this.triggerRef = c;
          }
        }}
        popupClassName={overlayClassName}
        popupStyle={overlayStyle}
        builtinPlacements={placements}
        action={trigger}
        popupPlacement={placement}
        popupAlign={align}
        popupTransitionName={transitionName}
        popupAnimation={animation}
        popupVisible={this.state.visible}
        afterPopupVisibleChange={this.afterVisibleChange}
        popup={this.getPopupElement()}
        onPopupVisibleChange={this.handleVisibleChange}
      >{children}</Trigger>
    );
  }
}

DropdownTreeTrigger.propTypes = propTypes;
DropdownTreeTrigger.defaultProps = defaultProps;
