import FriendListItem from "./friendListItem";

export default function FriendList({friends}) {
  return (
    <ul className="friend-list">
      {friends.map((friend) => (<FriendListItem {...friend} />))}
    </ul>
  );
}