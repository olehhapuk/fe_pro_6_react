import FriendList from './FriendList/FriendList';
import friends from './FriendList/friends.json';

import Profile from './Profile/Profile';
import user from './Profile/user.json';

function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <FriendList friends={friends} />
    </div>
  );
}

export default App;
