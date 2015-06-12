import PropertyMixin   from 'components/PropertyMixin';
import Association     from './Association.react';

export default React.createClass({
  displayName: 'form/BelongsTo',

  mixins: [PropertyMixin],

  propTypes: {
    column:   React.PropTypes.object.isRequired,
    resource: React.PropTypes.object.isRequired,
    settings: React.PropTypes.object.isRequired,
    disabled: React.PropTypes.bool
  },

  getFormValue() {
    var value = this.getResourceValue();
    delete value[this.props.column.association.name];

    return value;
  },

  getResourceValue() {
    var value = {};
    var name = this.props.column.name;
    value[name] = null;
    var target = this.refs.association.state.target;
    if(target){
      value[name] = target.id;
      value[this.props.column.association.name] = target;
    }

    return value;
  },

  isDirty() {
    return this.refs.association.isDirty()
  },

  render() {
    var column      = this.props.column;
    var name        = column.name;
    var label       = this.toProperyName(column);
    var association = this.props.column.association;
    var target      = this.props.resource[association.name];

    var attrs = {
      name:     name,
      column:   column,
      resource: this.props.resource,
      settings: this.props.settings,
      buttons:  { select: association.select, clear: association.select, create: association.create, edit: association.update },
      disabled: this.props.disabled,
      target:   target,
    }

    return(
      <div className="form-group" key={ name }>
         <label >{ label }</label>

         <Association {...attrs} ref='association'/>
      </div>
    );
  },
})
