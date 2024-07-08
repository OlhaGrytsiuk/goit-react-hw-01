import s from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={s.item}>
      <img src={avatar} alt="Avatar" width="48" className={s.avatar} />
      <p className={s.name}>{name}</p>
      <p className={isOnline ? s.isActive : s.notActive}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};
export default FriendListItem;
