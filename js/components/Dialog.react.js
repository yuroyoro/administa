import DialogActions   from 'actions/DialogActions';
import Selection       from 'components/list/Selection.react';

export default React.createClass({
  displayName: 'Dialog',

  propTypes: {
    name:           React.PropTypes.string,
    opened:         React.PropTypes.bool,
    component:      React.PropTypes.func,
    componentProps: React.PropTypes.object,
    onclose:        React.PropTypes.func,
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

      console.log('Dialog:render: ' + this.props.name);
      console.log(InnerComponent);
      return (
        <div className="dialog-base" >
          <div className='dialog-bg' onClick={ this.close }/>

          <Selection {...this.props.componentProps} />
        </div>
      );
    } else {
      return <div className="dialog-base" style={{display: 'none'}} />;
    }
  }
});
