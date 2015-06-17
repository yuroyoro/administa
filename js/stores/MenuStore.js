import Events        from 'events'
import Constants     from '../Constants';
import AppDispatcher from '../AppDispatcher';
import assign        from 'object-assign';

var _menus = [];
var MenuStore = assign({}, Events.EventEmitter.prototype,  {

  emitEvent() {
    this.emit();
  },

  addEventListener(callback) {
    this.on("menu:change", callback);
  },

  removeEventListener(callback) {
    this.removeListener("menu:change", callback);
  },

  setState(menus) {
    _menus = menus;
  },

  getState() {
    return _menus;
  },
});

AppDispatcher.register((action) => {
  switch(action.type) {
    case Constants.MENU_INITIALIZED:
      var data = action.data;
      MenuStore.setState(data);
      MenuStore.emitEvent();

      break;

    default: // no op
  }
});
export default MenuStore;
