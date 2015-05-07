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
        type:     Constants.RESOURCE_FETCH,
        name:     name,
        resource: data.resource
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
        type:      Constants.RESOURCE_LIST,
        name:      name,
        resources: data.resources,
        pagination: data.pagination
      });
    })
    .fail((xhr, status, err) => {
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
      data: data
    })
    .done((data) => {
      console.log(data);
      AppDispatcher.dispatch({
        type:     Constants.RESOURCE_UPDATED,
        name:     name,
        resource: data.resource
      });
    })
    .fail((xhr, status, err) => {
      console.error(url, status, err.toString());
    }).promise();

  }

}


