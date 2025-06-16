import React, { useEffect, useState } from "react";
import axios from "axios";

type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    axios.get("https://reqres.in/api/users/2")
      .then(response => {
        setUser(response.data.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load user data.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  // TODO: Format and display registration date
  // TODO: Show warning if no avatar
  // TODO: Make layout mobile responsive

  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "1rem",
      borderRadius: "8px",
      width: "400px"
    }}>
      <img src={user?.avatar} alt="avatar" width="100" height="100" />
      <h2>{user?.first_name} {user?.last_name}</h2>
      <p>Email: {user?.email}</p>
    </div>
  );
};

export default UserProfile;