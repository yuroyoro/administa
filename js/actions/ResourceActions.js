import AppDispatcher from '../AppDispatcher';
import Constants     from '../Constants';
import Utils         from 'Utils';

export default {

  initialize(data) {
    AppDispatcher.dispatch({
      type: Constants.INITIALIZE,
      data: data
    });
  },

  fetch(name, id, query = {}){
    let url = '/administa/' + name + '/' + id;

    console.log('fetch :' + url);
    return $.ajax({
      url: url,
      dataType: 'json',
      data: query
    })
    .done((data) => {
      console.log('fetch done:' + url);
      console.log(data);
      AppDispatcher.dispatch({
        type: Constants.RESOURCE_FETCH,
        name: name,
        data: data
      });
    })
    .fail((xhr, status, err) => {
      console.error(url, status, err.toString());
    }).promise();

  },

  list(name, query = {}) {
    let url = '/administa/' + name;

    console.log('list:' + url);

    return $.ajax({
      url: url,
      dataType: 'json',
      data: query
    })
    .done((data) => {
      console.log(data);
      AppDispatcher.dispatch({
        type: Constants.RESOURCE_LIST,
        name: name,
        data: data
      });
    })
    .fail((xhr, status, err) => {
      console.error(url, status, err.toString());
    }).promise();
  },

  build(name, data = {}){
    let url = '/administa/' + name + "/new";

    console.log('build:' + url);

    return $.ajax({
      url: url,
      dataType: 'json',
      data: data
    })
    .done((data) => {
      console.log(data);
      AppDispatcher.dispatch({
        type: Constants.RESOURCE_BUILD,
        name: name,
        data: data
      });
    })
    .fail((xhr, status, err) => {
      console.error(url, status, err.toString());
    }).promise();
  },

  create(name,  data = {}) {
    let url = '/administa/' + name ;

    console.log('create:' + url);

    return this.sendRequiest("POST", url, data).done((data) => {
      console.log(data);
      AppDispatcher.dispatch({
        type: Constants.RESOURCE_CREATED,
        name: name,
        data: data
      });
    })
    .fail((xhr, status, err) => {
      if( xhr.status == 422) {
        var res = xhr.responseJSON;
        AppDispatcher.dispatch({
          type: Constants.RESOURCE_INVALID,
          name: name,
          data: res
        });
      }

      console.error(url, status, err.toString());
    }).promise();
  },

  update(name, id, data = {}) {
    let url = '/administa/' + name + "/" + id ;

    console.log('update:' + url);

    return this.sendRequiest("PUT", url, data).done((data) => {
      console.log(data);
      AppDispatcher.dispatch({
        type: Constants.RESOURCE_UPDATED,
        name: name,
        data: data
      });
    })
    .fail((xhr, status, err) => {
      if( xhr.status == 422) {
        var res = xhr.responseJSON;
        AppDispatcher.dispatch({
          type: Constants.RESOURCE_INVALID,
          name: name,
          data: res
        });
      }
      console.error(url, status, err.toString());
    }).promise();
  },

  destroy(name, id, query, options = {}) {
    let url = '/administa/' + name + "/" + id ;

    console.log('delete:' + url);

    var csrfToken = options.csrfToken;
    var ajaxparams = {
      url: url,
      type: "DELETE",
      dataType: 'json',
      data: query,
    };

    if( csrfToken ) {
      ajaxparams.headers = {
        'X-CSRF-Token': csrfToken
      }
    }

    return $.ajax(ajaxparams).done((data) => {
      console.log(data);
      AppDispatcher.dispatch({
        type: Constants.RESOURCE_DELETED,
        name: name,
        data: data
      });
    })
    .fail((xhr, status, err) => {
      if( xhr.status == 422) {
        var res = xhr.responseJSON;
        AppDispatcher.dispatch({
          type: Constants.RESOURCE_INVALID,
          name: name,
          data: res
        });
      }
      console.error(url, status, err.toString());
    }).promise();
  },

  sendRequiest(method, url, data) {
    var csrfToken = data.csrfToken;
    delete data.csrfToken;

    var reqdata = this.requestData(data);
    var ajaxparams = {
      url: url,
      type: method,
      dataType: 'json',
    };

    if( csrfToken ) {
      ajaxparams.headers = {
        'X-CSRF-Token': csrfToken
      }
    }

    if( reqdata instanceof FormData ){
      ajaxparams.data = reqdata;
      ajaxparams.processData = false;
      ajaxparams.contentType = false;
    } else {
      ajaxparams.data = JSON.stringify(reqdata);
      ajaxparams.contentType =  'application/json';
    }

    return $.ajax(ajaxparams);
  },

  requestData(data) {
    var res   = this.separateJsonAndFiles(data);
    var json  = res.json;
    var files = res.files;

    if( Utils.empty(files) ) {
      return json;
    }

    var formdata = new FormData();
    formdata = this.constructFormData(formdata, json);
    formdata = this.constructFormData(formdata, files);

    return formdata;
  },

  constructFormData(formdata, data, prefix) {


    var keys = Object.keys(data);
    for (var i = 0, len = keys.length; i < len; i++) {
      var key = keys[i];
      var v = data[key];

      var name = key;
      if( prefix ) {
        name = `${prefix}[${key}]`;
      }

      if( v instanceof File ) {
        formdata.append(name, v, v.name);
        continue;
      }

      if( v instanceof Array ) {
        v.forEach((child) => {
          if( Utils.isPrimitive(child) ) {
            formdata.append(name + "[]", child);
          } else {
            this.constructFormData(formdata, child, name + "[]");
          }
        });
        continue;
      }

      if( v instanceof Object) {
        this.constructFormData(formdata, v, name);
        continue;
      }
      formdata.append(name, v);
    }

    return formdata;
  },

  separateJsonAndFiles(data) {
    var json  = {};
    var files = {};

    if( Utils.isPrimitive(data) ) {
      return { json: data, files: files };
    }

    var keys = Object.keys(data);
    for (var i = 0, len = keys.length; i < len; i++) {
      var name = keys[i];
      var v = data[name];

      if( v instanceof File ) {
        files[name] = v;
        continue;
      }

      if( v instanceof Array ) {
        var childJson = [];
        var childFiles= [];
        if( v.length == 0 ) {
          json[name] = v;
          continue;
        }

        v.forEach((child) => {
          if( Utils.isPrimitive(child) ) {
            childJson.push(child);
          } else {
            var res = this.separateJsonAndFiles(child);
            if( Utils.present(res.json) ) {
              childJson.push(res.json);
            }
            if( Utils.present(res.files) ) {
              childFiles.push(res.files);
            }
          }
        });

        if( Utils.present(childJson) ) {
          json[name] = childJson;
        }
        if( Utils.present(childFiles) ) {
          files[name] = childFiles;
        }
        continue;
      }

      if( v instanceof Object) {
        var res = this.separateJsonAndFiles(v);
        if( Utils.present(res.json) ) {
          json[name]  = res.json;
        }
        if( Utils.present(res.files) ) {
          files[name] = res.files;
        }
        continue;
      }

      json[name] = v;
    }

    return { json: json, files: files };
  }
}


