import Router          from 'react-router';
import ResourceActions from 'actions/ResourceActions';
import ShowProperty    from 'components/detail/Property.react';
import EditProperty    from './Property.react';
import LinkMixin       from 'components/LinkMixin';

export default React.createClass({
  displayName: 'ResourceEdit',

  mixins: [LinkMixin, Router.Navigation],

  propTypes: {
    name: React.PropTypes.string,
    id:   React.PropTypes.number,
    col:  React.PropTypes.number,
    resource: React.PropTypes.object.isRequired,
    settings: React.PropTypes.object
  },

  properties() {
    var shows = this.props.settings.show.columns;
    var edits = this.props.settings.edit.columns;
    var resource = this.props.resource;

    return shows.map((col) => {
      if( edits.indexOf(col) >= 0 ) { // editable
        return <EditProperty column={ col } value={ resource[col] } key={ col } ref={ col }/>;

      } else { // readonly
        return <ShowProperty column={ col } value={ resource[col] } key={ col }/>;
      }
    });
  },

  getFormData(){
    var data = {};
    var keys = Object.keys(this.refs);

    for (var i = 0, len = keys.length; i < len; i++) {
      var key = keys[i];
      var property = this.refs[key];
      data[key] = property.state.value;
    }

    return {"resource" :data};
  },


  handleSave() {
    console.log("handleSave");
    var data = this.getFormData();
    console.log(data);

    let name = this.props.name;
    let id   = this.props.id;

    var options = {
      name:  name,
      id:    id,
      page:  this.props.pagination.page,
      limit: this.props.pagination.limit,
      order: this.props.pagination.order,
      q:     this.props.pagination.q
    }
    var params = { name: name, id: id };
    var query = this.linkToListQuery(options);

    ResourceActions.update(name, id, data).then(() => {
      this.transitionTo('show', params, query);
    } );

  },


  render() {
    console.log("resource edit render");
    var resource = this.props.resource;
    var classes = "resource-edit" ;
    classes += " col-md-" + this.props.col;

    if (!resource) {
      return <div className={ classes } />
    }

    var properties = this.properties();

    return(
      <div className={ classes }>
        <div className="box box-primary">
          <div className="box-header with-border">
            <h3 className='box-title'> Edit: {this.props.name}({this.props.id})</h3>
            <div className="box-tools pull-right">
              <button type="button" className="btn btn-primary btn-xs" onClick={ this.handleSave }>save</button>
            </div>
          </div>
          <div className="box-body">
            { properties }
          </div>
        </div>
      </div>
    );
  },
})
