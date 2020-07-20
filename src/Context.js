import React, { useState, createContext, useContext } from "react";

// Default values
const UserContext = createContext({
  firstName: "Bob",
  lastName: "Bobberson",
  suffix: 1,
  email: "bobbobberson@example.com",
});

// Note that we don't pass props from 1 to 2 till 5
// This is the use of useContext hook
const LevelFive = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <div>
      <h5>{`${user.firstName} ${user.lastName} the ${user.suffix} born`}</h5>
      <button
        onClick={() => {
          setUser(Object.assign({}, user, { suffix: user.suffix + 1 }));
        }}
      >
        Increment
      </button>
    </div>
  );
};

// Anything under provider gets re-rendered if value changes
// Press increment and see
const LevelFour = () => {
  console.log("rendered");
  return (
    <div>
      <h4>Fourth Level</h4>
      <LevelFive />
    </div>
  );
};

const LevelThree = () => {
  return (
    <div>
      <h3>Third Level</h3>
      <LevelFour />
    </div>
  );
};

const LevelTwo = () => {
  return (
    <div>
      <h2>Second Level</h2>
      <LevelThree />
    </div>
  );
};

export default function Context() {
  const userState = useState({
    firstName: "James",
    lastName: "Jameson",
    suffix: 1,
    email: "jamesjameson@example.com",
  });
  return (
    // Actual value and it's setter that will be passed
    <UserContext.Provider value={userState}>
      <h1>First Level</h1>
      <LevelTwo />
    </UserContext.Provider>
  );
}
