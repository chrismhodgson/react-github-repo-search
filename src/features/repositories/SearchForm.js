import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { TextField, Button } from '@mui/material';
import { fetchRepositories } from './repositoriesSlice';

export default function SearchForm() {
  const [searchText, setSearchText] = useState('')
  const dispatch = useDispatch()
  const onSearchTextKeyDown = e => e.keyCode == 13 ? search() : null
  const onSearchTextChanged = e => setSearchText(e.target.value)
  const onSearchButtonClicked = () => search()
  const search = () => searchText ? dispatch(fetchRepositories(searchText)) : null

  return (
    <>
      <TextField size="small" sx={{ mt: -0.25, mr: 1 }}
        label="Enter a name" variant="outlined"
        onChange={ onSearchTextChanged }
        onKeyDown={onSearchTextKeyDown}
        />
      <Button size="medium" variant="outlined" onClick={ onSearchButtonClicked }>Search</Button>
    </>
  );
}