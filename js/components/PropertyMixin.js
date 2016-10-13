export default {

  toProperyName(col) {
    var name = col.label;
    if(col.association) {
      name = col.association.label;
    }
    return name;
  },

  toProperyKey(col) {
    var name = col.name;
    if(col.association) {
      name = col.association.name;
    }
    return name;
  },

  toLabel(col, resource, options = {}) {
    var name = this.toProperyKey(col);
    var val  = resource[name];
    var search_columns = options.search_columns;
    var wrap_tag = options.wrap_tag || false ;
    var ellipsis = options.ellipsis || false ;

    switch( col.type ) {
      case "file" :
        var imgtag = null;
        if( val.url ) {
          if ( wrap_tag && val.is_image) {
            val = <span><img src={ val.url } />{ val.url }</span>;
          } else {
            val = val.url
          }
        }
         break;
      case "boolean" :
         if(!val) {
           if( wrap_tag ) {
             val = <span><i className="fa fa-fw  fa-toggle-off"></i> off</span>;
           } else {
             val = 'on';
           }
         } else {
           if( wrap_tag ) {
             val = <span><i className="fa fa-fw  fa-toggle-on"></i> on</span>;
           } else {
             val = 'on';
           }
         }
         break;
      case "datetime":
        // convert value with browser timezone by moment.js
        var format =  'YYYY/MM/DD HH:mm:ss Z';
        val = moment(val, format).format(format);
    }

    if(col.association) {
      name = col.association.name;
      var nested = val;

      if( !nested ) {
        return "";
      }
      if(col.association.type == 'has_many' || col.association.type == 'through') {
        val = [];
        var to = nested.length;
        if (ellipsis && to > 3) to = 3;
        for(var i = 0; i < to; i++) {
          if( !nested[i] ) continue;
          var s = this.extractLabel(col.association.label, nested[i], search_columns);
          if( !wrap_tag ) {
            val.push(s);
          } else {
            s = this.wrapPermlink(s, nested[i], col.association);
            val.push(<div key={i}>{s}</div>);
          }
        }

        if( ellipsis && nested.length > to ) {
          if( !wrap_tag ) {
            val.push("...")
          } else {
            val.push(<div key={to + 1}>...</div>);
          }
        }

        if( !wrap_tag ) val = val.join(", ")

        return val;
      } else {
        val = this.extractLabel(name, nested,  search_columns);
      }

      if( !wrap_tag ) return val;

      // permlink
      return this.wrapPermlink(val, nested, col.association);

    }
    return val;
  },

  wrapPermlink(val, obj, association) {
    // permlink
    if( !(obj && obj.id && association.controller_path)) {
      return val;
    }

    var href =  `/${ association.controller_path }/${ obj.id }`;
    return <a href={ href }>{ val }</a>
  },

  extractLabel(name, obj, search_columns) {
    var label = name;
    var id = obj.id || 'new';

    if ( search_columns ) {
      for(var i = 0; i < search_columns.length; i++) {
        var v = obj[search_columns[i]];
        if(v)  {
          label = v;
          break;
        }
      }
    }
    return label + "(" + id + ")"
  }
}

