import Router          from 'react-router';
import ResourceActions from 'actions/ResourceActions';
import ResourceStore   from 'stores/ResourceStore';
import List            from './list/List.react';

var RouteHandler = Router.RouteHandler;

export default React.createClass({

  displayName: 'Resource',

  getInitialState() {
    return ResourceStore.getState();
  },

  componentDidMount() {
    ResourceStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    ResourceStore.removeChangeListener(this._onChange);
  },

  _onChange() {
    this.setState(ResourceStore.getState());
  },

  contextTypes: {
    router: React.PropTypes.func
  },

  render() {
    console.log("resource render");
    console.log(this.props);

    var leftcol = 12;
    var rightcol= 12;
    var id   = this.state.id   || this.props.params.id;
    var name = this.state.name || this.props.params.name;
    var resource   = this.state.resource   || {};
    var resources  = this.state.resources  || [];
    var settings   = this.state.settings   || {};
    var pagination = this.state.pagination || {};

    console.log('resource = ');
    console.log(resource);

    if(id && resource) {
      leftcol = 8;
      rightcol= 4;
      id = Number(id);
    }

    var attrs = {
      name: name,
      id:   id,
      settings: settings,
      pagination: pagination
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


