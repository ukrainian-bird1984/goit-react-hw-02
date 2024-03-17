import React from 'react';
import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div>
      <div>
        <img
          src={image}
          alt="User avatar"
        />
        <p className={css.user}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul>
        <li className={css.item}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
