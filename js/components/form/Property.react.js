export default React.createClass({
  displayName: 'ResourceEditProperty',

  propTypes: {
    column:  React.PropTypes.string
  },

  getInitialState: function() {
    return { value: this.props.value }
  },

  handleChange: function(event) {
    this.setState({value: event.target.value});
  },

  render() {
    var column = this.props.column;
    var value = this.state.value;
    var name = "resource[" + column + "]";
    return(
      <div className="form-group" key={ column }>
         <label htmlFor={ name } >{ column }</label>
         <input type="text" className="form-control input-sm"  name={ name } value={ value } onChange={ this.handleChange } />
      </div>
    );
  },
})
