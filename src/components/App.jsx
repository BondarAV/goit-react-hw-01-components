import React from "react";

import Profile from "./profile";
import userData from '../data/user.json';

import Statistics from "./statistics";
import statisticsData from "../data/data.json";

import FriendList from "./friendList";
import friendsData from "../data/friends.json";

import TransactionHistory from "./transactions";
import transactionsData from "../data/transactions.json";

export const App = () => {
  return (
    <div className="app">
      <Profile {...userData} />
      <Statistics title="Upload stats" stats={statisticsData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactionsData} />
    </div>
  );
};
