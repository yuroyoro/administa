import DialogStore from 'stores/DialogStore';
import Dialog      from './Dialog.react';

export default React.createClass({
  displayName: 'Dialogs',

  getInitialState: function() {
    return DialogStore.getAllState();
  },

  componentDidMount() {
    DialogStore.addEventListener("*", this._onChange);
  },

  componentWillUnmount() {
    DialogStore.removeEventListener("*", this._onChange);
  },

  _onChange(e) {
    var st = DialogStore.getAllState();
    console.log("Dialog: _onChange");
    console.log(st);

    this.setState(st);
    // this.setState(ResourceStore.getState(this.props.params.name));
  },

  render() {

    var dialogs = [];

    for(var k in this.state) {
      var dialog = this.state[k];
      dialogs.push(<Dialog
          key={ dialog.name }
          name={ dialog.name }
          opened={ dialog.opened }
          component={ dialog.component }
          componentProps={ dialog.props }/>);
    }

    return (
      <div id="dialogs">
        { dialogs }
      </div>
    );
  }
});
