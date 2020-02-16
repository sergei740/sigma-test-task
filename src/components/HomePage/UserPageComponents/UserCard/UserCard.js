import React from 'react';
import { makeStyles, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  liStyle: {
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    fontSize: '26px',
  },
  img: {
    maxWidth: '100%',
    height: 'auto'
  },
  photo: {
    overflow: 'hidden',
    textAlign: 'center',
    borderRadius: '50px',
    width: '100px',
    height: '100px',
  },
  name: {
    width: '200px',
    textAlign: 'center'
  },
  buttonsContainer: {
    width: 600,
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

const UserCard = (props) => {
  const classes = useStyles();
  const { id, name, photo, friendStatus } = props.user;

  return (
    <li className={ classes.liStyle }>
      <div className={ classes.photo }>
        <img alt={ id } src={ photo } className={ classes.img }/>
      </div>
      <div className={ classes.name }>{ `${ name }` }</div>
      <div className={ classes.buttonsContainer }>
        { friendStatus ? <Typography variant="h6" gutterBottom>friend</Typography> : null }
        { friendStatus ? null : <Button variant="contained" color="primary">Add friend</Button> }
        { friendStatus ? <Button variant="outlined" color="secondary">Remove friend</Button> : null }
        {/*<Button variant="outlined" color="secondary">Cancel request</Button>*/}
      </div>
    </li>
  )
};

export default UserCard;