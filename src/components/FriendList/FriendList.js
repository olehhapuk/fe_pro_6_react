import PropTypes from 'prop-types';

import styles from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

export default function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map((friend) => {
        return (
          <FriendListItem
            key={friend.id}
            name={friend.name}
            avatar={friend.avatar}
            isOnline={friend.isOnline}
          />
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  // friends: PropTypes.array.isRequired, // Будь-який масив
  friends: PropTypes.arrayOf(PropTypes.object).isRequired, // Масив об'єктів
};
