import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "Mike",
    lastName: "Okunonke",
    admin: false,
  })
  //const [lastName, setLastName] = useState("Henry");

  function handleChange(event) {
    // name is the KEY in of the formData object we're trying to update
    const name = event.target.name;
    let value = event.target.value;
  
    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  } 

  // function handleFirstNameChange(event) {
  //   setFormData({
  //     ...formData,
  //     firstName: event.target.value,
  //   });
  //   //setFirstName(event.target.value);
  // }

  // function handleLastNameChange(event) {
  //   setFormData({
  //     ...formData,
  //     LastName: event.target.value,
  //   });
  //   //setLastName(event.target.value);
  // }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }
  

  return(
    <form onSubmit ={handleSubmit}>
      <input
      type = "text"
      name = "firstName"
      onChange = {handleChange}
      value = {FormData.firstName}
      />

<input
      type = "text"
      name = "lastName"
      onChange = {handleChange}
      value = {FormData.lastName}
      />

<input
      type = "checkbox"
      name = "admin"
      onChange = {handleChange}
      value = {FormData.admin}
      />
<button type="submit">Submit</button>

    </form>
  )
}

export default Form;
