import React from "react";
import UserProfile from "./components/UserProfile";

const App: React.FC = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>User Profile Dashboard</h1>
      <UserProfile />
    </div>
  );
};

export default App;