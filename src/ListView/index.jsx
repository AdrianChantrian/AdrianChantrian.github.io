import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import CurrencyItem from './CurrencyItem';
import store from '../redux/store';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}))

export default function ListView() {
  const classes = useStyles()
  const currencyArray = store.getState()
  return (
    <List className={classes.root}>
      {
        currencyArray.map(currency =><CurrencyItem key={currency.coin} currency={currency}/>)
      }
    </List>
  );
}
