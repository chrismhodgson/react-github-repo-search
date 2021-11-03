import * as React from 'react';
import { useSelector } from 'react-redux'
import { Typography, List, ListItem, ListItemText, Box } from '@mui/material';
import { selectRepositoryById } from './repositoriesSlice';

export default function ItemStats(props) {
  const { id } = props
  const repository = useSelector(selectRepositoryById(id))

  if (!repository) return null
  return (
    <Box sx={{ mt: 4 }} color="text.secondary">
      <Typography align="right" sx={{ mb: 2 }} variant="h6">Repository Stats</Typography>
      <List dense color="text.secondary">
        <ListItem><ListItemText sx={{ textAlign: "right" }} primary={'Forks: ' + repository.forks}/></ListItem>
        <ListItem><ListItemText sx={{ textAlign: "right" }} primary={'Watchers: ' + repository.watchers} /></ListItem>
        <ListItem><ListItemText sx={{ textAlign: "right" }} primary={'Stars: ' + repository.stars} /></ListItem>
        <ListItem><ListItemText sx={{ textAlign: "right" }} primary={'Open issues: ' + repository.issues} /></ListItem>
      </List>
    </Box>
  );
}