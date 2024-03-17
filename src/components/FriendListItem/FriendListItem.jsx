import React from 'react';
import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusText = isOnline ? 'Online' : 'Offline';
  const statusColor = isOnline ? 'green' : 'red';

  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={name.css}>{name}</p>
      <p style={{ color: statusColor }}>{statusText}</p>
    </div>
  );
};

export default FriendListItem;
