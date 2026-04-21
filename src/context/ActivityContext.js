import React, { createContext, useReducer, useEffect } from "react";
import { activityReducer } from "./activityReducer";

export const ActivityContext = createContext();

export const ActivityProvider = ({ children }) => {
  const initialState = {
    activities: [],
    filtered: []
  };

  const [state, dispatch] = useReducer(activityReducer, initialState);

  // FETCH FROM API (NO HARDCODING)
  useEffect(() => {
    fetch("https://t4e-testserver.onrender.com/api/activities", {
      headers: {
        Authorization: "Bearer 648156"
      }
    })
      .then(res => res.json())
      .then(data => {
        // CLEAN INVALID DATA
        const validData = data.filter(a => a.id && a.name);
        dispatch({ type: "SET_ACTIVITIES", payload: validData });
      });
  }, []);

  return (
    <ActivityContext.Provider value={{ state, dispatch }}>
      {children}
    </ActivityContext.Provider>
  );
};