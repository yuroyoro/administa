
import AppDispatcher from '../AppDispatcher';
import Constants     from '../Constants';

export default {

  open(name, component, props) {
    AppDispatcher.dispatch({
      type: Constants.DIALOG_OPENED,
      data: {
        name: name,
        component: component,
        props: props
      }
    });
  },

  close(name) {
    AppDispatcher.dispatch({
      type: Constants.DIALOG_CLOSED,
      data: {
        name: name,
      }
    });
  }
}
