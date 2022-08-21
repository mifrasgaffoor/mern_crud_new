import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
const EditeUser = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");
  useEffect(() => {
    singleUser();
  }, []);

  const singleUser = () => {
    fetch(`http://localhost:5500/users/${id}`, {})
      .then((response) => {
        return response.json();
      })
      .then((singledata) => {
        setName(singledata.name);
        console.log(singledata.name);
        setCity(singledata.city);
        setAge(singledata.age);
      });
  };

  const fetchUpdate = () => {
    fetch(`http://localhost:5500/users/update/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        _id: id,
        name: name,
        city: city,
        age: age,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log("update ok");
        navigate("/");
      });
  };
  console.log(data);

  return (
    <div>
      <div className="container-lg">
        <div className="form-group">
          <label>Name:</label>
          <input
            type={"text"}
            placeholder="Enter the user name"
            className="form-control"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>City :</label>
          <input
            type={"text"}
            className="form-control"
            placeholder="Enter the City"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input
            type={"number"}
            className="form-control"
            placeholder="Enter the Age"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>
        <div className="mt-2">
          <div className="row">
            <div className="col-3 pr-1">
              <button
                className="btn btn-primary"
                onClick={() => {
                  fetchUpdate();
                }}
              >
                Update User
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditeUser;
