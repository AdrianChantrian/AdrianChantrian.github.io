import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import store from '../redux/store';
const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    marginLeft:150
    },
});

export default function CardCurrency(props) {
  const classes = useStyles();
  const currencyArray = store.getState();
  const [isShow,setIsShow] = React.useState(false);
  const showMore = () =>{
    setIsShow(!isShow)
  }
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={currencyArray[props.page-1].coin}
          height="300"
          width="300"
          image={currencyArray[props.page-1].logo}
          title={`${currencyArray[props.page-1].coin} Information`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {currencyArray[props.page-1].coin}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" >
            {`Minimum fee: ${currencyArray[props.page-1].minimum_fee}`}
            <br/>
            {`Minimum fee coin: ${currencyArray[props.page-1].minimum_fee_coin}`}
            <br/>
            {`Minimum transaction: ${currencyArray[props.page-1].minimum_transaction}`}
            <br/>
            {`Minimum transaction coin: ${currencyArray[props.page-1].minimum_transaction_coin}`}
            <br/>
            {`Update Time: ${currencyArray[props.page-1].prices_updated}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{display:isShow?"block":"none"}}>
            {"AED:" + currencyArray[props.page-1].prices["AED"]} <br/>
            {"BRL:" + currencyArray[props.page-1].prices["BRL"]} <br/>
            {"CAD:" + currencyArray[props.page-1].prices["CAD"]} <br/>
            {"CNY:" + currencyArray[props.page-1].prices["CNY"]} <br/>
            {"DKK:" + currencyArray[props.page-1].prices["DKK"]} <br/>
            {"EUR:" + currencyArray[props.page-1].prices["EUR"]} <br/>
            {"GBP:" + currencyArray[props.page-1].prices["GBP"]} <br/>
            {"HKD:" + currencyArray[props.page-1].prices["HKD"]} <br/>
            {"INR:" + currencyArray[props.page-1].prices["INR"]} <br/>
            {"JPY:" + currencyArray[props.page-1].prices["JPY"]} <br/>
            {"MXN:" + currencyArray[props.page-1].prices["MXN"]} <br/>
            {"PLN:" + currencyArray[props.page-1].prices["PLN"]} <br/>
            {"UGX:" + currencyArray[props.page-1].prices["UGX"]} <br/>
            {"USD:" + currencyArray[props.page-1].prices["USD"]}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={showMore}>
          {
            !isShow ? "Learn Price" : "Show Base"
          }
        </Button>
      </CardActions>
    </Card>
  );
}

