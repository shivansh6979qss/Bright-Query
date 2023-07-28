import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchdata = createAsyncThunk("data/fetchdata", async (prop) => {
  console.log("ddddddd", prop);
  try {
    const res = await axios.get(
      "http://vespa-dev-36202923.us-west-2.elb.amazonaws.com/search",
      {
        params: {
          // filter: updatedFilters,
          // offset: currentPage,
          hits: 20,
          ranking: "bm25",
          type: "all",
          // query: search,
          query: prop,
          // orderby: orderby,
          // isAsc: isAsc,
          // field: searchSelect,
        },
      }
    );
    console.log("fbhdh", res);
    return res.data;
  } catch (error) {
    console.log("error", error);
    return error;
  }
});

const dataSlice = createSlice({
  name: "dataList",
  initialState: {
    loading: "true",
    data: [],
    error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(fetchdata.pending, (state, action) => {
      state.loading = true;
      state.data = [];
      state.error = false;
    });
    builder.addCase(fetchdata.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = false;
    });
    builder.addCase(fetchdata.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = true;
    });
  },
});

export default dataSlice.reducer;
