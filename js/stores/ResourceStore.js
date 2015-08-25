import Events        from 'events'
import Constants     from '../Constants';
import AppDispatcher from '../AppDispatcher';
import assign        from 'object-assign';

var states = {};

class ResourceState {
  constructor(name, data = {}) {
    this.name            = name            || '';
    this.currentId       = data.id;
    this.currentResource = data.resource;
    this.settings        = data.settings   || {};
    this.resources       = data.resources  || [];
    this.pagination      = data.pagination || {};
    this.errors          = data.errors     || {};
    this.csrfToken       = data.csrf_token || "";
    this.flash           = data.flash      || "";
  }

  update(other) {
    var setUnlessEmpty = function(attr, self) {
      if( other.hasOwnProperty(attr) == false ) {
        return
      }
      var v = other[attr];
      if(v && Object.keys(v).length > 0) {
        self[attr] = v;
      }
    };

    if (other.currentId) this.currentId = other.currentId;

    setUnlessEmpty("currentResource", this);
    setUnlessEmpty("resources",       this);
    setUnlessEmpty("settings",        this);
    setUnlessEmpty("pagination",      this);
    setUnlessEmpty("errors",          this);
    setUnlessEmpty("csrfToken",       this);
    setUnlessEmpty("flash",           this);
    return this;
  }

  clone() {
    return new ResourceState( this.name, {
      id:         this.currentId,
      resource:   this.currentResource,
      settings:   this.settings,
      resources:  this.resources,
      pagination: this.pagination,
      csrfToken:  this.csrfToken,
      flash:      this.flash,
    });
  }
}

var ResourceStore = assign({}, Events.EventEmitter.prototype,  {

  eventTag(name) {
    return "resource:"  + name;
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

  updateState(name, data) {
    var old   = this.getState(name);
    var state = new ResourceState(name, data);

    console.log('update state');
    console.log('old :');
    console.log(old);
    console.log('new ');
    console.log(state);
    if(old) {
      state = old.clone().update(state);
    }

    console.log('result');
    console.log(state);
    this.setState(name, state);
    return state;
  },

  setState(name, state) {
    states[name] = state;
  },

  getState(name) {
    return states[name];
  },

  getAllState() {
    return states;
  },

});

AppDispatcher.register((action) => {
  switch(action.type) {
    case Constants.INITIALIZE:
      console.log('store INITIALIZE');
      var data = action.data;
      console.log(data);
      var name = data.name;

      var state = new ResourceState(name, data);
      console.log(state);

      ResourceStore.setState(name, state);
      ResourceStore.emitEvent(name);

      break;
    case Constants.RESOURCE_FETCH:
      console.log('store RESOURCE_FETCH');

      var data = action.data;
      var name = action.name;

      ResourceStore.updateState(name, data);
      ResourceStore.emitEvent(name);

      break;
    case Constants.RESOURCE_LIST:
      console.log('store RESOURCE_LIST');
      var data = action.data;
      var name = action.name;

      ResourceStore.updateState(name, data);
      ResourceStore.emitEvent(name);

      break;
    case Constants.RESOURCE_BUILD:
      console.log('store RESOURCE_BUILD');

      var data = action.data;
      var name = action.name;

      var state = ResourceStore.updateState(name, data);
      state.currentId = null; // clear currentid
      ResourceStore.emitEvent(name);

      break;
    case Constants.RESOURCE_CREATED:
      console.log('store RESOURCE_CREATED');

      var data = action.data;
      var name = action.name;

      ResourceStore.updateState(name, data);
      ResourceStore.emitEvent(name);

      break;
    case Constants.RESOURCE_UPDATED:
      console.log('store RESOURCE_UPDATED');

      var data = action.data;
      var name = action.name;

      ResourceStore.updateState(name, data);
      ResourceStore.emitEvent(name);

      break;
    case Constants.RESOURCE_INVALID:
      console.log('store RESOURCE_INVALID');

      var data = action.data;
      var name = action.name;

      ResourceStore.updateState(name, data);
      ResourceStore.emitEvent(name);

    default: // no op
  }
});
export default ResourceStore;
