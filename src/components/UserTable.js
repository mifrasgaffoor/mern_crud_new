import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const UserTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5500/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const getAllUsers = data;
        setData(getAllUsers);
      });
  }, []);

  async function deleteUser(id) {
    try {
      const det = await axios.delete(
        `http://localhost:5500/users/delete/${id}`,
        {
          _id: id,
        }
      );
      console.log(det);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h4> Show User data</h4>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Age</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.city}</td>
              <td>{user.age}</td>
              <td>
                <Link className="btn btn-primary" to={`/edit/${user._id}`}>
                  Edit
                </Link>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteUser(user._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
