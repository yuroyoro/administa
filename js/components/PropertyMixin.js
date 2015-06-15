export default {

  toProperyName(col) {
    var name = col.name
    if(col.association) {
      name = col.association.name;
    }
    return name;
  },

  toLabel(col, resource, search_columns) {
    var name = this.toProperyName(col);
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
          var s = this.extractLabel(name, nested[i], search_columns);
          val.push(<div key={i}>{s}</div>);
        }

        return val;
      }

      val = this.extractLabel(name, nested, search_columns);
    }
    return val;
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