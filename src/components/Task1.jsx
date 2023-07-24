// task1 : need to create three input fied => one is for name and second one is for email
//  third one => age
// you need to add the name, email, age from input field print in undorderlist by Clicking
// on button.
// and you need to also store the previous one . that previous one must not get deleted

import React, { useState } from "react";

const Task1 = () => {
  let [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    age: "",
  });

  let [storeUserInfo, setStoreUserInfo] = useState([]);

  const handleInput = (e) => {
    let { value, name } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const addUserInfo = (e) => {
    e.preventDefault();
    setStoreUserInfo([
      ...storeUserInfo,
      {
        NAME: userInfo.name,
        EMAIL: userInfo.email,
        AGE: userInfo.age,
      },
    ]);

    if (userInfo.name === "" || userInfo.age === "" || userInfo.email === "") {
      alert("please fill the form");
    }
    document.querySelectorAll("input").forEach((input) => (input.value = ""));
    // setUserInfo([{}]);
  };

  //    let { value } = e.target;
  // setUserInfo({
  //     name: value, => in this previous value get lost only last one is going show
  //     email: value,
  //   });

  // setUserInfo({
  //     ...userInfo,
  //     name: value,  => cause we using only one event in every input it will run for every
  //     email: value,    it not dynamic going each input for that we need add each input
  //     age: value,      name attribute with same name that we have in state(userInfo) object
  //   });                then we need to add get name from event and [name] : value that it.

  return (
    <>
      <form action="">
        <div>
          <label>Name: </label>
          <input name="name" onChange={handleInput} type="text" />
        </div>

        <div>
          <label>Email: </label>
          <input name="email" onChange={handleInput} type="email" />
        </div>

        <div>
          <label>age : </label>
          <input name="age" onChange={handleInput} type="text" />
        </div>

        <div>
          <button onClick={addUserInfo} type="submit">
            Add
          </button>
        </div>

        {storeUserInfo.map((value, index) => {
          return (
            <>
              <div
                key={index}
              >{`Name : ${value.NAME}, email : ${value.EMAIL} , age : ${value.AGE}`}</div>
            </>
          );
        })}
      </form>
    </>
  );
};

export default Task1;
