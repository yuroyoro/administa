import Router          from 'react-router';
import ResourceActions from 'actions/ResourceActions';
import LinkMixin       from 'components/LinkMixin';

var Link = Router.Link;
var PT = React.PropTypes

export default React.createClass({
  displayName: 'list/Pagination',

  mixins: [LinkMixin, Router.Navigation],

  propTypes: {
    name:      PT.string,
    id:        PT.number,
    resource:  PT.object,
    pagination: PT.object,
    transition: PT.bool
  },

  paginationLink(label, page) {
    let name   = this.props.name;
    let id     = this.props.id;

    var className = '';
    if (page == this.props.pagination.page) {
      className = 'active';
    }

    var linkAttrs = {
      name:       name,
      id:         id,
      label:      label,
      page:       page,
      limit:      this.props.pagination.limit,
      order:      this.props.pagination.order,
      q:          this.props.pagination.q,
      transition: this.props.transition
    }

    return(
      <li className={ className } key={ label }>
        { this.linkToList(linkAttrs) }
      </li>
    );

  },

  render() {
    var page  = this.props.pagination.page;
    var count = this.props.pagination.count;
    var total = this.props.pagination.total_pages;
    var from  = page - 2;
    var to    = page + 2;

    if (from < 1)   from = 1;
    if (to > total) to = total;

    if (to - from < 4) {
      if(from + 4 <= total) {
        to = from + 4;
      }
      else if(to - 4 > 1) {
        from = to - 4;
      }
    }

    var links = [];
    if (from > 1) {
      links.push(this.paginationLink('«', 1));
    }

    for (var i=from; i <= to; i++) {
      links.push(this.paginationLink(i, i));
    }

    if (to < total) {
      links.push(this.paginationLink('»', total));
    }

    links.push( <li className='disabled' key='administa-records-label'><a href="#">{ count + " records"}</a></li>);
    links.push( <li className='disabled' key='administa-pages-label'><a href="#">{ total + " pages"}</a></li>);

    return(
      <ul className="pagination pagination-sm no-margin pull-right">
        { links }
      </ul>
      );
  }
});
