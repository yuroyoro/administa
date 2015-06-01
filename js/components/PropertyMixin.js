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

      val = this.extractLabel(name, nested, search_columns);
    }
    return val
  },

  extractLabel(name, obj, search_columns) {
    console.log('extractLabel');
    console.log(name);
    console.log(obj);
    console.log(search_columns);
    var label = name;
    for(var i = 0; i < search_columns.length; i++) {
      var v = obj[search_columns[i]];
      if(v)  {
        label = v;
        break;
      }
    }
    return label + "(" + obj.id + ")"
  }

}
