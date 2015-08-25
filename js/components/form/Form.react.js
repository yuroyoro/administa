import Router          from 'react-router';
import assign          from 'object-assign';
import ResourceActions from 'actions/ResourceActions';
import ResourceStore   from 'stores/ResourceStore';
import Property        from 'components/detail/Property.react';
import Input           from './Input.react';
import BelongsTo       from './BelongsTo.react';
import HasOne          from './HasOne.react';
import HasMany         from './HasMany.react';
import Through         from './Through.react';
import LinkMixin       from 'components/LinkMixin';
import Utils           from 'Utils';

export default React.createClass({
  displayName: 'form/Form',

  mixins: [LinkMixin, Router.Navigation],

  propTypes: {
    name:      React.PropTypes.string,
    id:        React.PropTypes.number,
    col:       React.PropTypes.number,
    resource:  React.PropTypes.object.isRequired,
    settings:  React.PropTypes.object,
    errors:    React.PropTypes.object,
    onsubmit:  React.PropTypes.func,
    classes:   React.PropTypes.array,
    dirty:     React.PropTypes.bool,
    csrfToken: React.PropTypes.string,
  },

  columns() {
    var cols = null;
    if(this.props.id){
      cols = this.props.settings.edit.columns;
    } else {
      cols = this.props.settings.create.columns;
    }

    return cols;
  },

  properties() {
    var cols = this.columns();

    var resource = this.props.resource;
    var errors   = this.props.errors;
    var errorsPresent = Utils.present(errors);

    return cols.map((col) => {

      var attrs = {
        column:  col,
        resource: this.props.resource,
        settings: this.props.settings,
        key: col.name,
      };

      if( errorsPresent ) {
        var msg = errors[col.name];
        if(!msg && col.association){
          msg = errors[col.association.name];
          if( msg instanceof Array ){
            msg = msg[0];
          }
        }

        if( msg ) {
          attrs.invalid = true;
          attrs.errors  = msg;
        }
      }

      var TheComponent = Property;

      if( col.readonly ){
        return <TheComponent {...attrs} />
      }

      // editable
      attrs.ref = col.name;

      TheComponent = Input;
      if( col.association ) {
        var atype = col.association.type;
        switch(atype) {
          case 'belongs_to':
            TheComponent = BelongsTo;
            break;
          case 'has_one':
            TheComponent = HasOne;
            break;
          case 'has_many':
            TheComponent = HasMany;
            break;
          case 'through':
            TheComponent = Through;
            break;
        }
      }

      return <TheComponent {...attrs} />
    });
  },

  hasFileField () {
    return this.columns().some((c) => { return c.type == "file" });
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

    ResourceActions.create(name, { resource: data, csrfToken: this.props.csrfToken }).then(() => {
      var state = ResourceStore.getState(name);
      var id    = state.currentId;
      var flash = state.flash;

      this.transitionToShow(name, id, pagination);

      if( flash ) {
        $.notifyBar({ cssClass: "success", html: flash, });
      }

    });
  },

  update(resource, data, dirty) {
    if( !dirty ) return;

    let name = this.props.name;
    let id   = this.props.id;
    let pagination = this.props.pagination;

    ResourceActions.update(name, id, { resource: data, csrfToken: this.props.csrfToken }).then(() => {
      var state = ResourceStore.getState(name);
      var flash = state.flash;

      this.transitionToShow(name, id, pagination);

      if( flash ) {
        $.notifyBar({ cssClass: "success", html: flash, });
      }
    });
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

    var title = `New: ${this.props.label}`;
    if (this.props.id) {
      title = `Edit: ${this.props.settings.label}(id:${this.props.id})`;
    }

    var properties = this.properties();
    var onsubmit   = this.props.onsubmit || this.handleSave

    return(
      <div className={ classes }>
        <div className="box box-primary">
          <div className="box-header with-border">
            <h3 className='box-title'> { title }</h3>
          </div>
          <div className="box-header">
            <div className="box-tools pull-right">
              <button type="button" className="btn btn-flat btn-primary btn-xs" onClick={ this.handleSave }>save</button>
            </div>
          </div>
          <div className="box-body">
            <form>
              { properties }
            </form>
          </div>
        </div>
      </div>
    );
  },
})
