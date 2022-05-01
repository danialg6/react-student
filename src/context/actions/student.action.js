export const submit = (dispatch) => {
  return (payload) => {
    dispatch({
      type: "submit",
      payload: {
        fullname: payload,
      },
    });
  };
};

export const add = (dispatch) => {
  return (payload) => {
    dispatch({
      type: "add",
      payload: {
        student: payload,
      },
    });
  };
};

export const remove = (dispatch) => {
  return (payload) => {
    dispatch({
      type: "remove",
      payload: {
        student: payload,
      },
    });
  };
};

export const loadStudents = (dispatch) => {
  return (payload) => {
    dispatch({
      type: "load",
      payload: {
        students: payload,
      },
    });
  };
};

export default { submit, add, remove, loadStudents };
