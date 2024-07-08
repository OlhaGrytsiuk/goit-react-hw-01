import FriendListItem from "../friendlistitem/FriendListItem.jsx";
import s from "./FriendList.module.css";

const FriendList = ({ friends }) => (
  <ul className={s.list}>
    {friends.map((friend) => {
      return (
        <li key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      );
    })}
  </ul>
);
export default FriendList;
