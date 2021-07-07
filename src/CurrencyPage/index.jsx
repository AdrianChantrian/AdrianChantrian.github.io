import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';

export default function CurrencyPage() {
  return (
    <MemoryRouter initialEntries={['/cards']} initialIndex={0}>
      <Route>
        {({ location }) => {
          const query = new URLSearchParams(location.search);
          const page = parseInt(query.get('page') || '1', 4);
          return (
            <Pagination
              page={page}
              count={4}
              renderItem={(item) => (
                <PaginationItem
                  component={Link}
                  to={`/cards${item.page === 1 ? '' : `?page=${item.page}`}`}
                  {...item}
                />
              )}
            />
          );
        }}
      </Route>
    </MemoryRouter>
  );
}
