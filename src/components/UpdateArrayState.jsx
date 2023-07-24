import React, { useState } from "react";

// => Arrays are mutable in JavaScript, but you should treat them as immutable when you
// store them in state. Just like with objects, when you want to update an array stored
// in state, you need to create a new one (or make a copy of an existing one), and
// then set state to use the new array.

// Mutation is basically changing the array itself instead of returning a new array
// with the new changes.

const UpdateArrayState = () => {
  let [name, setName] = useState("");

  let [storeName, SetStoreName] = useState([]);

  const handleInput = (e) => {
    setName(e.target.value);
  };

  const AddName = () => {
    SetStoreName([
      ...storeName,
      {
        NAME: name,
      },
    ]);

    setName("");
  };

  return (
    <div>
      <h1>Enter Name:</h1>
      <input onChange={handleInput} type="text" />
      <div>
        <button onClick={AddName}>Add</button>
      </div>

      <li>
        {storeName.map((value, index) => {
          return (
            <>
              <ul key={index}>{value.NAME}</ul>
            </>
          );
        })}
      </li>
    </div>
  );
};

export default UpdateArrayState;

// ---------------------------READ ONLY----------------------------------
// IMP : Updating objects and arrays in useState
// Never directly modify an object or array stored in useState. Instead, you should
// create a new updated version of the object or array and call setState with the
// new version. For example:

// // Objects
// const [state, setState] = useState({ name: 'John', age: 30 });

// const updateName =  () => {
//   setState({ ...state, name: 'Jane' });
// };

// note : above only for updating not for storing

//IMP : Updating and also storing the array

//when you want to update an array stored
// in state, you need to create a new one (or make a copy of an existing one), and
// then set state to use the new array.

// let [name, setName] = useState("");

// let [storeName, SetStoreName] = useState([]);

// const handleInput = (e) => {
//   setName(e.target.value);
// };

// const AddName = () => {
//   SetStoreName([
//     ...storeName,
//     {
//       NAME: name,
//     },
//   ]);

//   setName("");
// };

// then we can use map method in storeName to print one by one we can do that cause we stored
