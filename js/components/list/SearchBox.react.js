import Router          from 'react-router';
import ResourceActions from 'actions/ResourceActions';
import LinkMixin       from 'components/LinkMixin';

var PT = React.PropTypes

export default React.createClass({
  displayName: 'list/SearchBox',

  mixins: [LinkMixin, Router.Navigation],

  propTypes: {
    name: PT.string,
    pagination: PT.object,
    transition: PT.bool,
  },

  getInitialState: function() {
    return {value: this.props.pagination.q};
  },

  handleChange: function(event) {
    this.setState({value: event.target.value});
  },

  search() {
    let name  = this.props.name;
    let id    = this.props.id;
    let route = 'resource';

    var params = { name: name }
    if (id) {
      params.id = id;
      route = 'show';
    }

    var options = {
      name:  name,
      id:    id,
      page:  1,
      limit: this.props.pagination.limit,
      order: this.props.pagination.order,
      q:     this.state.value
    }
    var query = this.linkToListQuery(options);
    ResourceActions.list(name, query).then(() => {
      var transition = !(this.props.transition == false);
      if( transition ) {
        this.transitionTo(route, params, query);
      }
    });
  },


  render() {
    var value = this.state.value;
    return(
      <div className="has-feedback input-group input-group-sm col-md-3 pull-right">
        <input type="text" className="form-control input-sm search-box-text" placeholder="Search..." value={value} onChange={this.handleChange}/>
        <span className="input-group-btn">
          <button type='submit' name='search' id='search-btn' className="btn btn-flat btn-primary" onClick={ this.search }><i className="fa fa-search"></i></button>
        </span>
      </div>
    );
  },
})
