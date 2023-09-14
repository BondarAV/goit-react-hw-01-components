const FriendListItem = ({avatar, name, isOnline, id}) => {
  console.log(id)
  return (
    <li className="item" key={id}>
      <span className={`status ${isOnline ? 'online' : 'offline'}`}></span>
      <img className="avatar" src={avatar} alt={`${name} avatar`} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendListItem;