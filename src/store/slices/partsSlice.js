import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { partsAPI } from '../../services/api';

export const loadParts = createAsyncThunk('parts/loadParts', async () => await partsAPI.fetchParts());
export const createPart = createAsyncThunk('parts/createPart', async (data) => await partsAPI.addPart(data));
export const removePart = createAsyncThunk('parts/removePart', async (id) => await partsAPI.deletePart(id));

const partsSlice = createSlice({
  name: 'parts',
  initialState: { items: [], loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(loadParts.pending, (state) => { state.loading = true; })
      .addCase(loadParts.fulfilled, (state, action) => { state.loading = false; state.items = action.payload; })
      .addCase(loadParts.rejected, (state, action) => { state.loading = false; state.error = action.error.message; })
      .addCase(createPart.fulfilled, (state, action) => { state.items.push(action.payload); })
      .addCase(removePart.fulfilled, (state, action) => { state.items = state.items.filter(i => i.id !== action.payload); });
  }
});

export default partsSlice.reducer;
