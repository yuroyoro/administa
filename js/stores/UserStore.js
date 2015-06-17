import Events        from 'events'
import Constants     from '../Constants';
import AppDispatcher from '../AppDispatcher';
import assign        from 'object-assign';

var _user ={};
var UserStore = assign({}, Events.EventEmitter.prototype,  {

  emitEvent() {
    this.emit();
  },

  addEventListener(callback) {
    this.on("user:change", callback);
  },

  removeEventListener(callback) {
    this.removeListener("user:change", callback);
  },

  setState(user) {
    _user = user;
  },

  getState() {
    return _user;
  },
});

AppDispatcher.register((action) => {
  switch(action.type) {
    case Constants.USER_INITIALIZED:
      var data = action.data;
      UserStore.setState(data);
      UserStore.emitEvent();

      break;

    default: // no op
  }
});
export default UserStore;
