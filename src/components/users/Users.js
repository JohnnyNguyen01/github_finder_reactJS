import React, { Component } from "react";
import UserItem from './UserItem';

class Users extends Component {
  state = {
    users: [
      {
        id: "1",
        avatar_url: "https://avatars2.githubusercontent.com/u/5550850?v=4",
        login: "mojombo",
        html_url: "https://github.com/bradtraversy",
      },
      {
        id: "2",
        avatar_url: "https://avatars2.githubusercontent.com/u/5550850?v=4",
        login: "mojombo",
        html_url: "https://github.com/bradtraversy",
      },
      {
        id: "3",
        avatar_url: "https://avatars2.githubusercontent.com/u/5550850?v=4",
        login: "mojombo",
        html_url: "https://github.com/bradtraversy",
      },
    ],
  };

  render() {
    return (
    <div style={userStyle}>
        {this.state.users.map(user => (
            <UserItem key={user.id} user={user}/>
        ))}
    </div>);
  }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users;
