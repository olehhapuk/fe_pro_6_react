import PropTypes from 'prop-types';

import styles from './FriendListItem.module.css';

export default function FriendListItem({ name, avatar, isOnline }) {
  return (
    <li className={styles.item}>
      <span
        className={isOnline ? styles.status : styles.statusOffline}
        // style={{
        //   background: isOnline ? 'green' : 'red',
        // }}
      ></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
};
