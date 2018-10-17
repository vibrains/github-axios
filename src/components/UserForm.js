import React from 'react';

const UserForm = (props) => {

  return (
    <form className="pure-form" onSubmit={props.getUser} >
    <input type="text" name="username"/>
    <button className="pure-button pure-button-primary">Submit</button>
    </form>
    );
}

export default UserForm;