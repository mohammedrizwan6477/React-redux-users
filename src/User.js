import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
const User = () => {
  const [data, setData] = useState([]);
  const userList = useSelector((state) => state.userList);
  useEffect(() => {
    setData(userList.users);
  }, [data]);
  return (
    <div>
      <h3>User Components</h3>
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.website}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default User;
