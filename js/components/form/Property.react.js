import PropertyMixin   from 'components/PropertyMixin';

export default React.createClass({
  displayName: 'form/Property',

  mixins: [PropertyMixin],

  propTypes: {
    column:   React.PropTypes.object.isRequired,
    resource: React.PropTypes.object.isRequired,
    settings: React.PropTypes.object.isRequired,
    disabled: React.PropTypes.bool
  },

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

  render() {
    var name  = this.props.column.name;
    var value = this.state.value;

    var classes = "form-control input-sm";
    if(this.isDirty()){
      classes += " modified";
    }

    return(
      <div className="form-group" key={ name }>
         <label htmlFor={ name } >{ name }</label>
         <input type="text" className={ classes } name={ name } value={ value } disabled={this.props.disabled} onChange={ this.handleChange } />
      </div>
    );
  },
})
