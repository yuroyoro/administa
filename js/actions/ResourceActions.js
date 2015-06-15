import AppDispatcher from '../AppDispatcher';
import Constants     from '../Constants';

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

    return $.ajax({
      url: url,
      type: "POST",
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify(data),
    })
    .done((data) => {
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

    return $.ajax({
      url: url,
      type: "PUT",
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify(data),
    })
    .done((data) => {
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
  }
}


