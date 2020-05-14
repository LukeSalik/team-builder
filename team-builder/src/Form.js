import React, { useState, useEffect } from "react";

function Form(props) {
  const teamMembers = props.members.map((member) => {
    return (
      <li>
        <label htmlFor="name">Name</label>
        <input value={""} onChange={() => {}} placeholder="Name" />

        <label htmlFor="email">Email</label>
        <input value={""} onChange={() => {}} placeholder="Email" />

        <label htmlFor="role">Role</label>
        <input value={""} onChange={() => {}} placeholder="Role" />
      </li>
    );
  });
  return (
    <form>
      <ul>{teamMembers}</ul>
    </form>
  );
}
export default Form;

//hold Form state in this component
