import Events        from 'events'
import Constants     from '../Constants';
import AppDispatcher from '../AppDispatcher';
import assign        from 'object-assign';

var dialogs = {};
var index   = 0;

class DialogState {
  constructor(name, component, index, props) {
    this.name      = name;
    this.component = component;
    this.index     = index
    this.props     = props;
    this.opened    = false;
  }

  open() {
    this.opened = true;
  }

  close() {
    this.opened = false;
  }
}

var DialogStore = assign({}, Events.EventEmitter.prototype,  {

  eventTag(name) {
    return "dialog:"  + name;
  },

  emitEvent(name) {
    this.emit(this.eventTag(name));

    if(name != "*") {
      this.emit(this.eventTag("*"));
    }
  },

  addEventListener(name, callback) {
    this.on(this.eventTag(name), callback);
  },

  removeEventListener(name, callback) {
    this.removeListener(this.eventTag(name), callback);
  },

  setState(name, dialog) {
    dialogs[name] = dialog;
  },

  getState(name) {
    return dialogs[name];
  },

  getAllState() {
    return dialogs;
  },
});

AppDispatcher.register((action) => {
  switch(action.type) {
    case Constants.DIALOG_OPENED:
      var data = action.data;
      var name = data.name;

      var dialog = new DialogState(name, data.component, index++, data.props);

      dialog.open();
      DialogStore.setState(name, dialog);

      DialogStore.emitEvent(name);
      break;

    case Constants.DIALOG_CLOSED:
      var data = action.data;
      var name = data.name;

      var dialog = DialogStore.getState(name);
      if( dialog ) {
        dialog.close();
        --index;
        DialogStore.setState(name, dialog);
        DialogStore.emitEvent(name);
      }

      break;
    default: // no op
  }
});
export default DialogStore;
