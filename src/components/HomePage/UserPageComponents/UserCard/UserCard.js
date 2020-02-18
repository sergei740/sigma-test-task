import React from 'react';
import { makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  liStyle: {
    marginBottom: '25px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    fontSize: '26px',
    margin:'auto'
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
    width: '30%',
    textAlign: 'left'
  },
  buttonsContainer: {
    width: '30%',
    display: 'flex',
    flexWrap:'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  friendStatus:{
    fontWeight: '300',
    color:'#655050',
    marginRight:'10px',
  }
}));

const UserCard = ({ user: { id, name, photo }, isFriend, changeCurrentUserFriendsList, currentUserFriendsList }) => {
  const classes = useStyles();

  const handlerCardClick = e => {
    if ((e.target.getAttribute('data-btn-type') === 'add')
      || (e.target.parentNode.getAttribute('data-btn-type') === 'add')) {
      changeCurrentUserFriendsList([...currentUserFriendsList, id]);
      localStorage.setItem('currentUserFriendsList', JSON.stringify([...currentUserFriendsList, id]));
    }
    if ((e.target.getAttribute('data-btn-type') === 'delete')
      || (e.target.parentNode.getAttribute('data-btn-type') === 'delete')) {
      changeCurrentUserFriendsList(currentUserFriendsList.filter(userId => userId !== id));
      localStorage.setItem('currentUserFriendsList', JSON.stringify(currentUserFriendsList.filter(userId => userId !== id)));
    }
  };

  return (
    <li id={id} className={classes.liStyle} onClick={handlerCardClick}>
      <div className={classes.photo}>
        <img alt={id} src={photo} className={classes.img}/>
      </div>
      <div className={classes.name}>{`${name}`}</div>
      <div className={classes.buttonsContainer}>
        {isFriend ? <span className={classes.friendStatus}>friend</span> : null}
        {isFriend ? null : <Button data-btn-type='add' variant="contained" color="primary">Add friend</Button>}
        {isFriend ? <Button data-btn-type='delete' variant="contained" color="secondary">Remove friend</Button> : null}
      </div>
    </li>
  )
};

export default UserCard;