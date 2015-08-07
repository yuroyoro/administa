import InputMixin      from './InputMixin';
import PropertyMixin   from 'components/PropertyMixin';

export default React.createClass({
  displayName: 'form/BelongsTo',

  mixins: [PropertyMixin, InputMixin],

  getFormValue() {
    var value = this.getResourceValue();
    var association = this.props.column.association;
    if(!(association.create || association.update)) {
      // remove if readonly
      delete value[association.name];
    }

    return value;
  },

  getResourceValue() {
    var value = {};
    var name = this.props.column.name;
    value[name] = null;
    var target = this.refs.association.state.target;
    if(target){
      var association_name = this.props.column.association.name;

      value[association_name + "_id"] = target.id;
      value[association_name] = target;
    }

    return value;
  },

  isDirty() {
    return this.refs.association.isDirty()
  },

  hasError() {
    return this.props.invalid;
  },

  render() {
    var column      = this.props.column;
    var name        = column.name;
    var label       = this.toProperyName(column);
    var association = this.props.column.association;
    var target      = this.props.resource[association.name];

    return(
      <div className={ this.formClasses() } key={ name }>
         <label >{ label }</label>

         { this.createAssociation(target, {ref: 'association'}) }
         { this.errorsBlock(label) }
      </div>
    );
  },
})
