import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import get from "../../app/github-client";

const initialState = []

export const fetchRepositories = createAsyncThunk('repositories/fetchRepositories', async searchText => {
  const response = await get(`search/repositories?q=${searchText}`)
  const items = response.data && response.data.items || []

  return items.map(item => ({
    id: item.id,
    forks: item.forks,
    issues: item.open_issues,
    watchers: item.watchers,
    stars: item.stargazers_count,
    owner: item.owner.login,
    repo: item.name,
    link: item.html_url
  }))
})

// export const fetchReadme2 = createAsyncThunk('repositories/fetchReadme2', async repository => {
//   const { owner, repo } = repository
//   const response = await get(`repos/${owner}/${repo}/readme`)
//   const encoded = response.data.content || ''
//   const decoded = Buffer.from(encoded, 'base64').toString('utf-8')
//   return { id, decoded }
// })

export const repositoriesSlice = createSlice({
  name: 'repositories',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchRepositories.fulfilled, (state, action) => action.payload)

    // builder.addCase(fetchReadme2.fulfilled, (state, action) => {
    //   const { id, decoded } = action.payload
    //   return state.map(repository => {
    //     if (repository.id === id) {
    //       repository.readme = decoded
    //     }
    //     return repository
    //   })
    // })
  }
})

export const selectRepositories = state => state.repositories
export const selectRepositoryById = id => state => {
  id = parseInt(id)
  return state.repositories.find(repository => repository.id === id)
}
export default repositoriesSlice.reducer
