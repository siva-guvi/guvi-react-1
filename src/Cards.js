import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '25%',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const [toggle, setToggle] = useState(true);
  const bull = <span className={classes.bullet}>•</span>;
const toggleFunctionality = () => {
    props.toggleFunctionality(!toggle);
    setToggle(!toggle)
}
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.subheading}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.heading}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.description}
        </Typography>
        <Typography variant="body2" component="p">
          {props.functionalities}
        </Typography>
      </CardContent>
      <CardActions>
        {props.buttonName ? 
            <Button size="small" onClick={() => toggleFunctionality()} >{props.buttonName}</Button> :
            <Button size="small" >ABOUT US</Button>
        }
        
      </CardActions>
    </Card>
  );
}
