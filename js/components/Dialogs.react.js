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

    this.setState(st);
    // this.setState(ResourceStore.getState(this.props.params.name));
  },

  render() {

    var dialogs = Object.keys(this.state).
      map((k) => { return this.state[k]; }).
      filter((d) => { return d.opened; }).
      sort((d1, d2) => { return d1 > d2 ; }).
      map((dialog) => {
        return (<Dialog
            key            = { dialog.name }
            name           = { dialog.name }
            opened         = { dialog.opened }
            component      = { dialog.component }
            onclose        = { dialog.onclose }
            index          = { dialog.index }
            componentProps = { dialog.props }
            />);
      });

    return (
      <div className="dialogs">
        { dialogs }
      </div>
    );
  }
});
