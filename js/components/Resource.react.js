import Router          from 'react-router';
import ResourceActions from 'actions/ResourceActions';
import ResourceStore   from 'stores/ResourceStore';
import List            from './list/List.react';

var RouteHandler = Router.RouteHandler;

export default React.createClass({

  displayName: 'Resource',

  getInitialState() {
    return ResourceStore.getState(this.props.params.name);
  },

  componentDidMount() {
    ResourceStore.addEventListener(this.props.params.name, this._onChange);
  },

  componentWillUnmount() {
    ResourceStore.removeEventListener(this.props.params.name, this._onChange);
  },

  _onChange() {
    var st = ResourceStore.getState(this.props.params.name);
    console.log("Resoruce: _onChange");
    console.log(st);

    this.setState(st);
    // this.setState(ResourceStore.getState(this.props.params.name));
  },

  contextTypes: {
    router: React.PropTypes.func
  },

  render() {
    console.log("resource render");
    console.log(this.props);

    var leftcol = 12;
    var rightcol= 12;
    var id   = this.state.currentId || this.props.params.id;
    var name = this.state.name      || this.props.params.name;
    var resource   = this.state.currentResource || {};
    var resources  = this.state.resources       || [];
    var settings   = this.state.settings        || {};
    var pagination = this.state.pagination      || {};
    var errors     = this.state.errors          || {};

    console.log('resource = ');
    console.log(resource);

    if(resource && Object.keys(resource).length != 0) {
      leftcol = 8;
      rightcol= 4;
      id = Number(id);
    }

    var attrs = {
      name: name,
      id:   id,
      label: settings.label,
      settings: settings,
      pagination: pagination,
      errors: errors,
    };

    var list_attrs = {
      col:        leftcol,
      resources:  resources
    }

    return (
      <div className="resoruce row">
        <List {...this.props} {...attrs} {...list_attrs} />
        <RouteHandler {...this.props} {...attrs} col={ rightcol } resource={ resource  } />
      </div>
    );
  }
});


