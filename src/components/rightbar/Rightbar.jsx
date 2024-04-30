import "./rightbar.css";
import { Users } from "../../assets/dummyData";
import Online from "../online/Online";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="../../assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and 3 other friends have birthday today.
          </span>
        </div>
        <img src="../../assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((user) => {
            return <Online key={user.id} user={user} />;
          })}
        </ul>
      </div>
    </div>
  );
}
