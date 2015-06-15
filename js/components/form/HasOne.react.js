import InputMixin      from './InputMixin';
import PropertyMixin   from 'components/PropertyMixin';

export default React.createClass({
  displayName: 'form/HasOne',

  mixins: [PropertyMixin, InputMixin],

  getFormValue() {
    return this.refs.association.getFormValue();
  },

  getResourceValue() {
    return this.refs.association.getResourceValue();
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
