import Events        from 'events'
import Constants     from '../Constants';
import AppDispatcher from '../AppDispatcher';
import assign        from 'object-assign';


var CHANGE_EVENT = 'change';

var id   = null;
var name = '';
var settings  = {}
var resource  = null;
var resources = [];
var pagination = {};

var ResourceStore = assign({}, Events.EventEmitter.prototype,  {

  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getState() {
    console.log('store getState');
    return {
      id:         id,
      name:       name,
      resource:   resource,
      resources:  resources,
      settings:   settings,
      pagination: pagination
    };
  }

});

AppDispatcher.register((action) => {
  switch(action.type) {
    case Constants.INITIALIZE:
      console.log('store INITIALIZE');
      var data = action.data;
      name       = data.name;
      id         = data.id;
      settings   = data.settings;
      resource   = data.resource;
      resources  = data.resources;
      pagination = data.pagination;

      ResourceStore.emitChange();
      break;

    case Constants.RESOURCE_FETCH:
      console.log('store RESOURCE_FETCH');
      console.log(action);
      name     = action.name;
      resource = action.resource;
      id       = resource.id;

      ResourceStore.emitChange();
      break;

    case Constants.RESOURCE_LIST:
      console.log('store RESOURCE_LIST');
      name       = action.name;
      resources  = action.resources;
      pagination = action.pagination;

      ResourceStore.emitChange();
      break;

    case Constants.RESOURCE_UPDATED:
      console.log('store RESOURCE_UPDATED');
      console.log(action);
      name     = action.name;
      resource = action.resource;
      id       = resource.id;

      ResourceStore.emitChange();
      break;

    default: // no op
  }
});
export default ResourceStore;
