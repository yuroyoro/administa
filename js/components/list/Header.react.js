var PT = React.PropTypes

export default React.createClass({
  displayName: 'ResourceHeader',

  propTypes: {
    name:      PT.string
  },

  render() {
    return <th> { this.props.name } </th>;
  }
});
