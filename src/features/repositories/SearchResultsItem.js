import * as React from 'react';
import { Link } from "react-router-dom";
import { Button, TableCell, TableRow } from '@mui/material';

export default function SearchResultsItem(props) {
  const repository = props.repository

  return (
    <TableRow
      key={ repository.id }
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell><Link to={`/repository/${repository.id}`}>{ repository.repo }</Link></TableCell>
      <TableCell>{ repository.owner }</TableCell>
      <TableCell align="right">
        <Button size="small" href={ repository.link } target="_blank"
          title="Opens the github.com repository in a new window" >
          View on github
        </Button>
      </TableCell>
    </TableRow>
  );
}