import React from 'react';
import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem.jsx'

const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends && friends.map((friend) => (
        <li className={css.item} key={friend.id}>
          <FriendListItem {...friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;

