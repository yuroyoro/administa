import Router          from 'react-router';
import ResourceActions from 'actions/ResourceActions';
import ShowProperty    from 'components/detail/Property.react';
import EditProperty    from './Property.react';
import Association     from './Association.react';

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
      if( edits.some((e) => e.name == col.name) ){ // editable
        if( col.association ) {
          return <Association column={ col } resource={ this.props.resource } settings={ this.props.settings } key={ col.name } ref = { col.name }/>;
        }

        return <EditProperty column={ col } resource={ this.props.resource } settings={ this.props.settings } key={ col.name } ref = { col.name }/>;

      } else { // readonly
        return <ShowProperty column={ col } resource={ this.props.resource } settings={ this.props.settings } key={ col.name }/>;
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
    var data = this.getFormData();
    console.log("FormData");
    console.log(data);

    let name = this.props.name;
    let id   = this.props.id;
    let pagination = this.props.pagination;

    ResourceActions.update(name, id, data).then(() => {
      this.transitionToShow(name, id, pagination);
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
              <button type="button" className="btn btn-flat btn-primary btn-xs" onClick={ this.handleSave }>save</button>
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
