import './Profileform.css';
import Button from '../../Button';
import React from 'react';

const ProfileForm = ({ updateProfile }) => {

  const items = {
    formButton: 'Update',
    profileForm: updateProfile
  }

  return (
    <div className="ProfileForm">
      {items.profileForm ? 
      <React.Fragment>
      <form className="update_profile_form" action="">
        <h3>Update Profile</h3>
        <div className="names_input_container">
          <input className="names_input" type="text" placeholder="First Name" />
          <input className="names_input" type="text" placeholder="Last Name" />
        </div>
        <input className="profile_input" type="text" placeholder="Country" />
        <input className="profile_input" type="Email" placeholder="Email" />
        <input className="profile_input" type="tel" placeholder="Phone Number" />
        <Button formButton={items.formButton} />
      </form>
      </React.Fragment> :

      <React.Fragment>
      <form className="update_profile_form" action="">
        <h3>Change Password</h3>
        <input className="profile_input" type="password" placeholder="Confirm Password" />
        <input className="profile_input" type="password" placeholder="Confirm Password" />
        <input className="profile_input" type="password" placeholder="Confirm Password" />
        <Button formButton={items.formButton} />
      </form>
      </React.Fragment>}
    </div>
  );
}

export default ProfileForm;