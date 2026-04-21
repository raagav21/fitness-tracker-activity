export const activityReducer = (state, action) => {
  switch (action.type) {
    case "SET_ACTIVITIES":
      return { ...state, activities: action.payload };

    case "FILTER":
      return {
        ...state,
        filtered: state.activities.filter(a =>
          a.name.toLowerCase().includes(action.payload.toLowerCase())
        )
      };

    default:
      return state;
  }
};