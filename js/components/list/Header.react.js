var PT = React.PropTypes

export default React.createClass({
  displayName: 'list/Header',

  propTypes: {
    label:      PT.string
  },

  render() {
    return <th> { this.props.label } </th>;
  }
});
