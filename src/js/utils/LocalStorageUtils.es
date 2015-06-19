
import Immutable from 'immutable';


export default Object.freeze({
  get: function (key) {
    return Immutable.fromJS(JSON.parse(localStorage.getItem(key)));
  },

  set: function (key, data) {
    localStorage.setItem(key, JSON.stringify(data.toJS()));
  }
});
