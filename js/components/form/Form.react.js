import Router          from 'react-router';
import assign          from 'object-assign';
import ResourceActions from 'actions/ResourceActions';
import ResourceStore   from 'stores/ResourceStore';
import ShowProperty    from 'components/detail/Property.react';
import Property        from './Property.react';
import BelongsTo       from './BelongsTo.react';
import HasOne          from './HasOne.react';
import HasMany         from './HasMany.react';
import Through         from './Through.react';
import LinkMixin       from 'components/LinkMixin';

export default React.createClass({
  displayName: 'form/Form',

  mixins: [LinkMixin, Router.Navigation],

  propTypes: {
    name:     React.PropTypes.string,
    id:       React.PropTypes.number,
    col:      React.PropTypes.number,
    resource: React.PropTypes.object.isRequired,
    settings: React.PropTypes.object,
    onsubmit: React.PropTypes.func,
    classes:  React.PropTypes.array,
    dirty:    React.PropTypes.bool,
  },

  properties() {
    var cols = null;
    if(this.props.id){
      cols = this.props.settings.edit.columns;
    } else {
      cols = this.props.settings.create.columns;
    }

    var resource = this.props.resource;

    return cols.map((col) => {

      var attrs = {
        column:  col,
        resource: this.props.resource,
        settings: this.props.settings,
        key: col.name,
      };

      var PropertyComponent = ShowProperty;

      if( col.readonly ){
        return <PropertyComponent {...attrs} />
      }

      // editable
      attrs.ref = col.name;

      PropertyComponent = Property;
      if( col.association ) {
        var atype = col.association.type;
        switch(atype) {
          case 'belongs_to':
            PropertyComponent = BelongsTo;
            break;
          case 'has_one':
            PropertyComponent = HasOne;
            break;
          case 'has_many':
            PropertyComponent = HasMany;
            break;
          case 'through':
            PropertyComponent = Through;
            break;
        }
      }

      return <PropertyComponent {...attrs} />
    });
  },

  getFormData(){
    var data = {};
    var keys = Object.keys(this.refs);

    for (var i = 0, len = keys.length; i < len; i++) {
      var key = keys[i];
      var property = this.refs[key];

      if( property.isDirty() ) {
        var value = property.getFormValue();
        assign(data, value);
      }
    }

    if(this.props.resource.id) {
      data.id = this.props.resource.id
    }

    return data;
  },

  getResourceData(){
    var resource = assign({}, this.props.resource);
    var keys = Object.keys(this.refs);

    for (var i = 0, len = keys.length; i < len; i++) {
      var key = keys[i];
      var property = this.refs[key];

      if( property.isDirty() ) {
        var value = property.getResourceValue();
        assign(resource, value);
      }
    }

    return resource;
  },

  isDirty() {
    if( this.props.dirty ) return true;

    var keys = Object.keys(this.refs);
    for (var i = 0, len = keys.length; i < len; i++) {
      var key = keys[i];
      var property = this.refs[key];
      if( property.isDirty() ) {
        return true
      }
    }
    return false;
  },

  handleSave() {
    var dirty = this.isDirty();

    if( !dirty ) console.log("formdata isn't modified");

    var data     = this.getFormData();
    var resource = this.getResourceData();
    var f        = this.props.onsubmit;

    if( !f ) {
      if(this.props.id) {
        f = this.update;
      } else {
        f = this.create;
      }
    }

    console.log("FormData --");
    console.log(data);
    console.log("---");

    f(resource, data, dirty);
  },

  create(resource, data, dirty) {
    if( !dirty ) return;

    let name = this.props.name;
    let pagination = this.props.pagination;

    ResourceActions.create(name, { resource: data }).then(() => {
      var state = ResourceStore.getState(name);
      var id = state.currentId;
      this.transitionToShow(name, id, pagination);
    } );
  },

  update(resource, data, dirty) {
    if( !dirty ) return;

    let name = this.props.name;
    let id   = this.props.id;
    let pagination = this.props.pagination;

    ResourceActions.update(name, id, { resource: data }).then(() => {
      this.transitionToShow(name, id, pagination);
    } );
  },

  render() {
    console.log("resource form render");
    var resource = this.props.resource;
    var classes = ["resource-form"] ;
    if(this.props.col) {
      classes.push("col-md-" + this.props.col);
    }
    if(this.props.classes) {
      classes = classes.concat(this.props.classes);
    }
    classes = classes.join(" ");

    if (!resource) {
      return <div className={ classes } />
    }

    console.log(resource);

    var title = `New: ${this.props.name}`;
    if (this.props.id) {
      title = `Edit: ${this.props.name}(${this.props.id})`;
    }

    var properties = this.properties();
    var onsubmit   = this.props.onsubmit || this.handleSave

    return(
      <div className={ classes }>
        <div className="box box-primary">
          <div className="box-header with-border">
            <h3 className='box-title'> { title }</h3>
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
