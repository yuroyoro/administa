import AppDispatcher from '../AppDispatcher';
import Constants     from '../Constants';

export default {

  initialize(data) {
    AppDispatcher.dispatch({
      type: Constants.USER_INITIALIZED,
      data: data
    });
  }
}
