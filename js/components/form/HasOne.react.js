import PropertyMixin   from 'components/PropertyMixin';
import Association     from './Association.react';

export default React.createClass({
  displayName: 'form/HasOne',

  mixins: [PropertyMixin],

  propTypes: {
    column:   React.PropTypes.object.isRequired,
    resource: React.PropTypes.object.isRequired,
    settings: React.PropTypes.object.isRequired,
    disabled: React.PropTypes.bool
  },

  getFormValue() {
    return this.refs.association.getFormValue();
  },

  getResourceValue() {
    return this.refs.association.getResourceValue();
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
