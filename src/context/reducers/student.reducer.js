const studentReducer = (state, action) => {
  switch (action.type) {
    case "submit":
      return {
        ...state,
        fullname: action.payload.fullname,
      };
    case "add":
      return {
        ...state,
        students: [...state.students, action.payload.student],
      };
    case "remove":
      return {
        ...state,
        students: state.students.filter(
          (student) => student.id !== action.payload.student.id
        ),
      };
    case "load":
      return {
        ...state,
        students: action.payload.students,
      };
    default:
      return state;
  }
};

export default studentReducer;
