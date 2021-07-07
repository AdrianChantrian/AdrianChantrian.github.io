import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

export default function CurrencyItem(props){
    
    return (
    <ListItem>
        <ListItemAvatar>
          <Avatar src={props.currency.logo}>

          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.currency.coin} secondary={props.currency.prices_updated} />
    </ListItem>)
}