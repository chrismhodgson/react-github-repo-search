import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import get from "../../app/github-client";

const initialState = ''

export const fetchReadme = createAsyncThunk('repositories/fetchReadme', async repository => {
  const { owner, repo, id } = repository
  const response = await get(`repos/${owner}/${repo}/readme`)
  const encoded = response.data.content || ''
  const decoded = Buffer.from(encoded, 'base64').toString('utf-8')
  return { id, decoded }
})

export const readmeSlice = createSlice({
  name: 'readme',
  initialState,
  reducers: {
    clearReadme: () => ''
  },
  extraReducers: (builder) => {
    builder.addCase(fetchReadme.fulfilled, (state, action) => {
      return action.payload
    })
  }
})

export const selectReadme = state => state.readme

export const { clearReadme } = readmeSlice.actions

export default readmeSlice.reducer
