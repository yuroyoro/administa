import InputMixin      from './InputMixin';
import PropertyMixin   from 'components/PropertyMixin';

export default React.createClass({
  displayName: 'form/Input',

  mixins: [PropertyMixin, InputMixin],

  getInitialState() {
    return {
      value: this.props.resource[this.props.column.name],
      dirty: false,
    }
  },

  handleChange(event) {
    var initial = this.props.resource[this.props.column.name];
    var value  = event.target.value;
    this.setState({
      value: value,
      dirty: (value != initial),
    });
  },

  getFormValue() {
    return this.getResourceValue();
  },

  getResourceValue() {
    var value = {};
    value[this.props.column.name] = this.state.value;
    return value;
  },

  isDirty() {
    return this.state.dirty;
  },

  hasError() {
    return this.props.invalid;
  },

  render() {
    var name  = this.props.column.name;
    var label = name;
    var value = this.state.value;

    return(
      <div className={ this.formClasses() } key={ name }>
         <label htmlFor={ name } >{ label }</label>
         <input type="text" className={ this.inputClasses() } name={ name } value={ value } disabled={this.props.disabled} onChange={ this.handleChange } />
         { this.errorsBlock(label) }
      </div>
    );
  },
})
