import assign          from 'object-assign';
import Association     from './Association.react';

export default {
  propTypes: {
    column:   React.PropTypes.object.isRequired,
    resource: React.PropTypes.object.isRequired,
    settings: React.PropTypes.object.isRequired,
    disabled: React.PropTypes.bool,
    invalid:  React.PropTypes.bool,
    errors:   React.PropTypes.string,
  },

  errorsBlock(label) {
    if(!this.props.errors || this.props.errors.length == 0) return null;

    return this.props.errors.map((e, i) => {
      var msg = `${label} ${e}`;
      return <p className="help-block" key={i} >{ msg }</p>;
    });
  },

  inputClasses() {
    var classes = "form-control input-sm";
    if(this.isDirty()){
      classes += " modified";
    }
    if(this.hasError()){
      classes += " invalid";
    }
    return classes;
  },

  formClasses() {
    var classes = "form-group";
    if(this.hasError()){
      classes += " has-error";
    }
    return classes;
  },

  createAssociation(target, options) {
    var column      = this.props.column;
    var name        = column.name;
    var association = this.props.column.association;

    var attrs = {
      name:     name,
      column:   column,
      resource: this.props.resource,
      settings: this.props.settings,
      buttons:  { select: association.select, clear: association.select, create: association.create, edit: association.update },
      disabled: this.props.disabled,
      target:   target,
    }

    assign(attrs, options);

    return  <Association {...attrs} />;
  }
}
