import Events        from 'events'
import Constants     from '../Constants';
import AppDispatcher from '../AppDispatcher';
import assign        from 'object-assign';

var _app={};
var AppStore = assign({}, Events.EventEmitter.prototype,  {

  emitEvent() {
    this.emit("app:change");
  },

  addEventListener(callback) {
    this.on("app:change", callback);
  },

  removeEventListener(callback) {
    this.removeListener("app:change", callback);
  },

  transitionTo(route, params, query) {
    _app.transitionTo = {
      route:  route,
      params: params,
      query:  query,
    }
  },

  setState(app) {
    _app = app;
  },

  getState() {
    return _app;
  },
});

AppDispatcher.register((action) => {
  switch(action.type) {
    case Constants.APP_TRANSITION:
      AppStore.transitionTo(action.route, action.params, action.query);
      AppStore.emitEvent();

      break;

    default: // no op
  }
});
export default AppStore;
