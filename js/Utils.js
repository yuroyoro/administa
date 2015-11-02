export default {
  present(obj) {
    return obj && Object.keys(obj).length > 0;
  },

  empty(obj) {
    return !obj || Object.keys(obj).length == 0;
  },

  isPrimitive(obj) {
  return !( (obj instanceof File ) || (obj instanceof Array) || (obj instanceof Object));
  },

  reportError (message, error, stack) {
    // e instanceof ErrorEvent
    jQuery("#resultLoading").hide();

    var html = `<div class='wild-error-notification'><h3>javascript error : ${message}</h3>`;
    var stack = stack || (error && error.stack);
    if( stack ) {
      html += `<pre>${stack}</pre>`
    }
    html += "</div>"

    jQuery("body").prepend(html);
  }
}
