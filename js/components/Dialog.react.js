import DialogActions   from 'actions/DialogActions';

export default React.createClass({
  displayName: 'Dialog',

  propTypes: {
    name:           React.PropTypes.string,
    opened:         React.PropTypes.bool,
    component:      React.PropTypes.func,
    componentProps: React.PropTypes.object,
    onclose:        React.PropTypes.func,
    index:          React.PropTypes.number,
  },

  close() {
    if(this.props.onclose) {
      this.props.onclose();
    }
    DialogActions.close(this.props.name);
  },

  render() {
    if( this.props.opened && this.props.component) {
      var InnerComponent = this.props.component;

      var index = this.props.index;
      console.log('Dialog:render: ' + this.props.name);
      console.log(InnerComponent);
      var zindex = 10000000 + ((index  + 1) * 10);
      var style = {
        top:    (index * 20) + "px",
        left:   (index * 20) + "px",
      };

      return (
        <div className="dialog-base" style={{zIndex: zindex }} >
          <div className='dialog-bg' onClick={ this.close } />

          <div style={ style }>
            <InnerComponent {...this.props.componentProps}/>
          </div>
        </div>
      );
    } else {
      return <div className="dialog-base" style={{display: 'none'}} />;
    }
  }
});
