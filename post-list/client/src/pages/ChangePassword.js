import React from "react";

function ChangePassword() {
  return (
    <div>
      <h1>Change your password</h1>
      <input type="text" placeholder="Old Password.." />
      <input type="text" placeholder="New Password.." />
      <button> Save Changes </button>
    </div>
  );
}

export default ChangePassword;
