import { GET_ALL_STUDENTS,GET_BY_NAME,GET_ALL_STAF,GET_BY_NAME_STAFF } from "./actionsTypes";
const initialState = {
  students: [],
  staff:[]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_STUDENTS:
      return {
        ...state,
        students: action.payload,
      };

    case GET_BY_NAME:
      return {
        ...state,
        students: action.payload,
      };
      case GET_ALL_STAF:
      return {
        ...state,
        staff: action.payload,
      };
      case GET_BY_NAME_STAFF:
      return {
        ...state,
        staff: action.payload,
      };

    default:
      return { ...state };
  }
};

export default reducer;
