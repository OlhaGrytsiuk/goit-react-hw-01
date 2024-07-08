import { username, tag, location, avatar, stats } from "../userData.json";
import friends from "../friends.json";
import transactions from "../transactions.json";
import Profile from "./profile/Profile.jsx";
import FriendList from "./friendlist/FriendList.jsx";
import TransactionHistory from "./transactionhistory/TransactionHistory.jsx";

const App = () => {
  return (
    <>
      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
export default App;
