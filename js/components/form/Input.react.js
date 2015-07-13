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
    if ( this.props.column.type == 'file') {
      value  = jQuery(event.target).prop('files')[0];
    }
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

  inputField() {
    var name   = this.props.column.name;
    var value  = this.state.value;

    switch( this.props.column.type ) {
      case "file" :
        var imgtag = null;
        if( value.url ) {
          imgtag = <img src={ value.url } />;
        }

        return (
          <div>
            { imgtag }
            <input type="file"  className={ this.inputClasses() } name={ name } disabled={this.props.disabled} onChange={ this.handleChange } />
          </div>
         );

         break;
      default:
        return <input type="text"  className={ this.inputClasses() } name={ name } value={ value } disabled={this.props.disabled} onChange={ this.handleChange } />
    }

  },

  render() {
    var name   = this.props.column.name;
    var column = this.props.column;
    var label  = this.toProperyName(column);

    return(
      <div className={ this.formClasses() } key={ name }>
         <label htmlFor={ name } >{ label }</label>
         { this.inputField() }
         { this.errorsBlock(label) }
      </div>
    );
  },
})
