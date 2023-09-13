const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <li class="item">
      <span class={`status ${isOnline ? 'online' : 'offline'}`}></span>
      <img class="avatar" src={avatar} alt={`${name} avatar`} width="48" />
      <p class="name">{name}</p>
    </li>
  );
}

export default function FriendList({friends}) {
  return (
    <ul class="friend-list">
      {friends.map((friend) => (<FriendListItem {...friend} />))}
    </ul>
  );
}