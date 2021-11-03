import * as React from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import { Box } from '@mui/material';
import { fetchReadme, selectReadme, clearReadme } from './readmeSlice';
import { selectRepositoryById } from './repositoriesSlice';

export default function ItemReadme(props) {
  const { id } = props
  const repository = useSelector(selectRepositoryById(id))
  if (!repository) {
    return <Box>Repository not found. <Link to="/">Please return to homepage</Link></Box>
  }
  const readme = useSelector(selectReadme)
  const dispatch = useDispatch()

  if (!readme) {
    dispatch(fetchReadme(repository))
    return <Box>Loading readme...</Box>
  }
  if (readme.id.toString() !== id) {
    dispatch(clearReadme())
  }

  return (
      <ReactMarkdown>{ readme.decoded }</ReactMarkdown>
  );
}