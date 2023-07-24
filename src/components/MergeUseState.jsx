import React, { useState } from "react";

// NOTE : First understand problem code starting from 93 line

// PROBLEM :
// I am working on a login form with 2 fields. Email and Password. When i am using 2
// useState representing the two field, then when i update the state with handleChange
// both state get updated. Which is not the intention.

// problem in code using only one event handler to 2 input

//    const [email, setEmail] = useState()
// const [password, setPassword] = useState();

// const handleChange = (e) => {
//   const { value } = e.target;
//   setEmail(value);
//   setPassword(value);
// };

// Is there any way to dynamically update the value for input fields with one event handler
// function like we could do with stateful component.

// I am working on a login form with 2 fields. Email and Password. When i am using 2 useState
// representing the two field, then when i update the state with handleChange both state get
// updated. Which is not the intention.

//    const [email, setEmail] = useState()
//    const [password, setPassword] = useState()

//     const handleChange = e => {
//         const {value} = e.target
//         setEmail(value)
//         setPassword(value)
//     }

// I don't want to use multiple event handler for handling each input field.
// I tried this

//     const [state , setState] = useState({
//         email : "",
//         password : ""
//     })

//     const handleChange = e => {
//         const {name , value} = e.target
//         setState({
//             [name] : value
//         })
//     }
//  But this updates one property at a time. And the other property value get lost.
//   update one property means => if we write input => email and if password
//  in last whatever you have written it will update that only suppose we wrote
// lastly password it will only add password , other proprerty value(EMAIL)here get lost.

// so that we need to get that property by ... spread operator like,

//     const handleChange = e => {
//         const {name , value} = e.target
//         setState({
//              ...state,
//             [name] : value
//         })
//     }

// So is there any way that i can update all my input fields with one event handler
// function like we could do with stateful component.

//     this.state = {
//       email : "",
//       password : ""
//     }

//     const handleChange = e => {
//         const {name , value} = e.target
//         this.setState({
//            [name] : value
//         })
//     }

// for that ,

// setState(prev => ({
//   ...prev,
//   [name] : value
// }))

// You'll create a new state object, which was created by previous state. And you can
// override anything you need. You'd need more new objects if you'd have a complex
// state object.

const MergeUseState = () => {
  let [userInfo, setUserInfo] = useState({
    email: "",
    name: "",
    password: "",
  });

  const handleInput = (e) => {
    let { value, name } = e.target;

    setUserInfo({
      ...userInfo, // prev value getting over here
      [name]: value,
    });
  };

  //  in order to get dynamic input value, we need to get previous value of userInfo as well
  //  email: "", name: "",  password: "", =>

  return (
    <>
      <h3>
        Hello , {userInfo.name} {userInfo.email}
      </h3>
      <div>
        <form action="">
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="">Name : </label>

            <input
              name="name"
              value={userInfo.name}
              onChange={handleInput}
              type="text"
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="">Email : </label>
            <input
              name="email"
              value={userInfo.email}
              onChange={handleInput}
              type="email"
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="">password : </label>
            <input
              value={userInfo.password}
              name="password"
              onChange={handleInput}
              type="password"
            />
          </div>

          <button onClick={(e) => e.preventDefault()} type="submit">
            submit
          </button>
        </form>
      </div>
    </>
  );
};

export default MergeUseState;

// NOTE :
