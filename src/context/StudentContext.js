import createStore from "./Store";
import reducer from "./reducers/student.reducer";
import actions from "./actions/student.action";

export const { Provider, Context } = createStore(reducer, actions, {
  fullname: null,
  students: [],
});
