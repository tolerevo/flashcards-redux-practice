import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice ({
  name: "topics",
  initialState: {
    topics: {}
  },
  reducers: {
    addTopic: (state, action) => {
      const { id, name, action } = action.payload;
      state.topics[id] = {
        id: id,
        name: name,
        icon,
        quizIds: []
      };
    }
  },
}) 