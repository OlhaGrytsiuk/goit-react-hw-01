import s from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <div className={s.container}>
        <img src={props.image} alt={props.name} className={s.avatar} />
        <p className={s.name}>{props.name}</p>
        <p className={s.tag}>@{props.tag}</p>
        <p className={s.location}>{props.location}</p>
      </div>

      <ul className={s.list}>
        <li className={s.item}>
          <span className={s.label}>Followers</span>
          <span className={s.stats}>{props.stats.followers}</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>Views</span>
          <span className={s.stats}>{props.stats.views}</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>Likes</span>
          <span className={s.stats}>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
