import * as React from 'react';
import { useSelector } from 'react-redux'
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper }  from '@mui/material';
import SearchResultsItem from './SearchResultsItem';
import { selectRepositories } from './repositoriesSlice'

export default function SearchResults() {
  const rows = useSelector(selectRepositories)

  if (!rows.length) return (<Box>No results</Box>)
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="github repository table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { rows.map(row => <SearchResultsItem key={ row.id } repository={ row }></SearchResultsItem>) }
        </TableBody>
      </Table>
    </TableContainer>
  );
}