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

  toLabel(col, resource, search_columns) {
    return this.stringifyProperty(col, resource, search_columns, true);
  },

  toTitle(col, resource, search_columns) {
    return this.stringifyProperty(col, resource, search_columns, false);
  },

  stringifyProperty(col, resource, search_columns, wrap_tag) {
    var name = this.toProperyKey(col);
    var val  = resource[name];

    if(col.association) {
      name = col.association.name;
      var nested = val;

      if( !nested ) {
        return "";
      }
      if(col.association.type == 'has_many' || col.association.type == 'through') {
        val = [];
        for(var i = 0; i < nested.length; i++) {
          var s = this.extractLabel(col.association.label, nested[i], search_columns);
          if( wrap_tag ) {
            val.push(s);
          } else {
            s = this.wrapPermlink(s, nested[i], col.association);
            val.push(<div key={i}>{s}</div>);
          }
        }

        if( !wrap_tag ) val = val.join(", ")

        return val;
      } else {
        val = this.extractLabel(name, nested, search_columns);
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
    var id = obj.id || 'new'
    for(var i = 0; i < search_columns.length; i++) {
      var v = obj[search_columns[i]];
      if(v)  {
        label = v;
        break;
      }
    }
    return label + "(" + id + ")"
  }

}
