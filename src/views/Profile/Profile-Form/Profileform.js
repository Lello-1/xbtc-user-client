import './Profileform.css';
import Button from '../../../components/Button';
import React, { useEffect, useState } from 'react';

const ProfileForm = ({ updateProfile, profileData }) => {

  // Change password state
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState({});
  const [passwordErrorClass, setPasswordErrorClass] = useState('');
  const [passwordChanged, setPasswordChanged] = useState(false);
  // Update profile state
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [country, setCountry] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [profileUpdated, setProfileUpdated] = useState(false);
  const items = { profileForm: updateProfile };
  
  // Component useEffect
  useEffect(() => {
    if (profileData) {
      setCountry(profileData.country);
      setFirstname(profileData.firstname);
      setLastname(profileData.lastname);
      setNumber(profileData.number);
      setEmail(profileData.email);
    }
  }, [profileData]);

  // Data and options for fetch request
  const updateProfileData = {
    firstname,
    lastname,
    country,
    number,
    email
  }

  const changePasswordData = {
    oldPassword,
    newPassword,
    confirmPassword
  }
  
  const options = {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(updateProfileData),
    headers: {
      'Content-Type': 'Application/JSON'
    }
  }

  const changePasswordOptions = {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(changePasswordData),
    headers: {
      'Content-Type': 'Application/JSON'
    }
  }

  // Handle the submit for update profile
  const handleUpdateProfile = (event) => {
    event.preventDefault();

    fetch('/user/update-profile', options)
      .then((res) => res.json())
      .then((res) => {
        setProfileUpdated(true);
        return res;
      });
  };

  // Handle the submit for change password
  const handlePasswordChange = (event) => {
    event.preventDefault();

    // Check if new password and confirm password match
    if(newPassword === confirmPassword) {
      fetch('/user/change-password', changePasswordOptions)
      .then((res) => res.json())
      .then((res) => {
        
        // Check if credentials matched on the server
        if (res.error) {
          if (res.error.credentials === 'Old Password is incorrect!') {
            setPasswordErrorClass({ credentials: 'password_error' });
            setPasswordError({ credentials: res.error.credentials });
            return res;
          }
        // If password is successfully changed, clear inputs and warnings
        } else {
          event.target[0].value = '';
          event.target[1].value = '';
          event.target[2].value = '';
          setPasswordErrorClass({ matched: '', credentials: '' });
          setPasswordError({ matched: '', credentials: '' });
          setPasswordChanged(true);
          return res;
        }
      });
    // If new password and confirm password don't match, activate warning
    } else {
      setPasswordErrorClass({ matched: 'password_error' });
      setPasswordError({ matched: 'Passwords do not match!' });
    }
  }

  // On change functions for profile update
  const firstnameChange = (event) => {
    setFirstname(event.target.value);
  };

  const lastnameChange = (event) => {
    setLastname(event.target.value)
  };

  const numberChange = (event) => {
    setNumber(event.target.value);
  };

  const emailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSelect = (event) => {
    setCountry(event.target.value);
  };

  // On change functions for password change
  const oldPasswordChange = (event) => {
    setOldPassword(event.target.value);
    setPasswordErrorClass({ matched: '', credentials: '' });
    setPasswordError({ matched: '', credentials: '' });
  };

  const newPasswordChange = (event) => {
    setNewPassword(event.target.value);
    setPasswordErrorClass({ matched: '', credentials: '' });
    setPasswordError({ matched: '', credentials: '' });
  };

  const confirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setPasswordErrorClass({ matched: '', credentials: '' });
    setPasswordError({ matched: '', credentials: '' });
  };

  // Conditions for error classes
  let className = 'update_profile_hidden';
  if(profileUpdated) {
    className = 'update_profile_show';
  }

  let classNamePassword = 'update_profile_hidden';
  if(passwordChanged) {
    classNamePassword = 'update_profile_show';
  }

  return (
    <div className="ProfileForm">
      {items.profileForm ? 
      <React.Fragment>
      <form className="update_profile_form" onSubmit={handleUpdateProfile}>
        <p className={className}>Profile updated</p>
        <h3>Update Profile</h3>
        <div className="names_input_container">
          <input
            defaultValue={firstname || ''}
            className="names_input"
            type="text"
            placeholder="First Name"
            onChange={firstnameChange}
            required
          />
          <input
            defaultValue={lastname || ''}
            className="names_input"
            type="text"
            placeholder="Last Name"
            onChange={lastnameChange}
            required
          />
        </div>
        <select
          value={country}
          name="country"
          className="country_select"
          onChange={handleSelect}
        >
          <option value="Afghanistan">Afghanistan</option>
          <option value="Åland Islands">Åland Islands</option>
          <option value="Albania">Albania</option>
          <option value="Algeria">Algeria</option>
          <option value="American Samoa">American Samoa</option>
          <option value="Andorra">Andorra</option>
          <option value="Angola">Angola</option>
          <option value="Anguilla">Anguilla</option>
          <option value="Antarctica">Antarctica</option>
          <option value="Antigua and Barbuda">Antigua and Barbuda</option>
          <option value="Argentina">Argentina</option>
          <option value="Armenia">Armenia</option>
          <option value="Aruba">Aruba</option>
          <option value="Australia">Australia</option>
          <option value="Austria">Austria</option>
          <option value="Azerbaijan">Azerbaijan</option>
          <option value="Bahamas">Bahamas</option>
          <option value="Bahrain">Bahrain</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="Barbados">Barbados</option>
          <option value="Belarus">Belarus</option>
          <option value="Belgium">Belgium</option>
          <option value="Belize">Belize</option>
          <option value="Benin">Benin</option>
          <option value="Bermuda">Bermuda</option>
          <option value="Bhutan">Bhutan</option>
          <option value="Bolivia">Bolivia</option>
          <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
          <option value="Botswana">Botswana</option>
          <option value="Bouvet Island">Bouvet Island</option>
          <option value="Brazil">Brazil</option>
          <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
          <option value="Brunei Darussalam">Brunei Darussalam</option>
          <option value="Bulgaria">Bulgaria</option>
          <option value="Burkina Faso">Burkina Faso</option>
          <option value="Burundi">Burundi</option>
          <option value="Cambodia">Cambodia</option>
          <option value="Cameroon">Cameroon</option>
          <option value="Canada">Canada</option>
          <option value="Cape Verde">Cape Verde</option>
          <option value="Cayman Islands">Cayman Islands</option>
          <option value="Central African Republic">Central African Republic</option>
          <option value="Chad">Chad</option>
          <option value="Chile">Chile</option>
          <option value="China">China</option>
          <option value="Christmas Island">Christmas Island</option>
          <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
          <option value="Colombia">Colombia</option>
          <option value="Comoros">Comoros</option>
          <option value="Congo">Congo</option>
          <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
          <option value="Cook Islands">Cook Islands</option>
          <option value="Costa Rica">Costa Rica</option>
          <option value="Cote D'ivoire">Cote D'ivoire</option>
          <option value="Croatia">Croatia</option>
          <option value="Cuba">Cuba</option>
          <option value="Cyprus">Cyprus</option>
          <option value="Czech Republic">Czech Republic</option>
          <option value="Denmark">Denmark</option>
          <option value="Djibouti">Djibouti</option>
          <option value="Dominica">Dominica</option>
          <option value="Dominican Republic">Dominican Republic</option>
          <option value="Ecuador">Ecuador</option>
          <option value="Egypt">Egypt</option>
          <option value="El Salvador">El Salvador</option>
          <option value="Equatorial Guinea">Equatorial Guinea</option>
          <option value="Eritrea">Eritrea</option>
          <option value="Estonia">Estonia</option>
          <option value="Ethiopia">Ethiopia</option>
          <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
          <option value="Faroe Islands">Faroe Islands</option>
          <option value="Fiji">Fiji</option>
          <option value="Finland">Finland</option>
          <option value="France">France</option>
          <option value="French Guiana">French Guiana</option>
          <option value="French Polynesia">French Polynesia</option>
          <option value="French Southern Territories">French Southern Territories</option>
          <option value="Gabon">Gabon</option>
          <option value="Gambia">Gambia</option>
          <option value="Georgia">Georgia</option>
          <option value="Germany">Germany</option>
          <option value="Ghana">Ghana</option>
          <option value="Gibraltar">Gibraltar</option>
          <option value="Greece">Greece</option>
          <option value="Greenland">Greenland</option>
          <option value="Grenada">Grenada</option>
          <option value="Guadeloupe">Guadeloupe</option>
          <option value="Guam">Guam</option>
          <option value="Guatemala">Guatemala</option>
          <option value="Guernsey">Guernsey</option>
          <option value="Guinea">Guinea</option>
          <option value="Guinea-bissau">Guinea-bissau</option>
          <option value="Guyana">Guyana</option>
          <option value="Haiti">Haiti</option>
          <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
          <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
          <option value="Honduras">Honduras</option>
          <option value="Hong Kong">Hong Kong</option>
          <option value="Hungary">Hungary</option>
          <option value="Iceland">Iceland</option>
          <option value="India">India</option>
          <option value="Indonesia">Indonesia</option>
          <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
          <option value="Iraq">Iraq</option>
          <option value="Ireland">Ireland</option>
          <option value="Isle of Man">Isle of Man</option>
          <option value="Israel">Israel</option>
          <option value="Italy">Italy</option>
          <option value="Jamaica">Jamaica</option>
          <option value="Japan">Japan</option>
          <option value="Jersey">Jersey</option>
          <option value="Jordan">Jordan</option>
          <option value="Kazakhstan">Kazakhstan</option>
          <option value="Kenya">Kenya</option>
          <option value="Kiribati">Kiribati</option>
          <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
          <option value="Korea, Republic of">Korea, Republic of</option>
          <option value="Kuwait">Kuwait</option>
          <option value="Kyrgyzstan">Kyrgyzstan</option>
          <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
          <option value="Latvia">Latvia</option>
          <option value="Lebanon">Lebanon</option>
          <option value="Lesotho">Lesotho</option>
          <option value="Liberia">Liberia</option>
          <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
          <option value="Liechtenstein">Liechtenstein</option>
          <option value="Lithuania">Lithuania</option>
          <option value="Luxembourg">Luxembourg</option>
          <option value="Macao">Macao</option>
          <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
          <option value="Madagascar">Madagascar</option>
          <option value="Malawi">Malawi</option>
          <option value="Malaysia">Malaysia</option>
          <option value="Maldives">Maldives</option>
          <option value="Mali">Mali</option>
          <option value="Malta">Malta</option>
          <option value="Marshall Islands">Marshall Islands</option>
          <option value="Martinique">Martinique</option>
          <option value="Mauritania">Mauritania</option>
          <option value="Mauritius">Mauritius</option>
          <option value="Mayotte">Mayotte</option>
          <option value="Mexico">Mexico</option>
          <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
          <option value="Moldova, Republic of">Moldova, Republic of</option>
          <option value="Monaco">Monaco</option>
          <option value="Mongolia">Mongolia</option>
          <option value="Montenegro">Montenegro</option>
          <option value="Montserrat">Montserrat</option>
          <option value="Morocco">Morocco</option>
          <option value="Mozambique">Mozambique</option>
          <option value="Myanmar">Myanmar</option>
          <option value="Namibia">Namibia</option>
          <option value="Nauru">Nauru</option>
          <option value="Nepal">Nepal</option>
          <option value="Netherlands">Netherlands</option>
          <option value="Netherlands Antilles">Netherlands Antilles</option>
          <option value="New Caledonia">New Caledonia</option>
          <option value="New Zealand">New Zealand</option>
          <option value="Nicaragua">Nicaragua</option>
          <option value="Niger">Niger</option>
          <option value="Nigeria">Nigeria</option>
          <option value="Niue">Niue</option>
          <option value="Norfolk Island">Norfolk Island</option>
          <option value="Northern Mariana Islands">Northern Mariana Islands</option>
          <option value="Norway">Norway</option>
          <option value="Oman">Oman</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Palau">Palau</option>
          <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
          <option value="Panama">Panama</option>
          <option value="Papua New Guinea">Papua New Guinea</option>
          <option value="Paraguay">Paraguay</option>
          <option value="Peru">Peru</option>
          <option value="Philippines">Philippines</option>
          <option value="Pitcairn">Pitcairn</option>
          <option value="Poland">Poland</option>
          <option value="Portugal">Portugal</option>
          <option value="Puerto Rico">Puerto Rico</option>
          <option value="Qatar">Qatar</option>
          <option value="Reunion">Reunion</option>
          <option value="Romania">Romania</option>
          <option value="Russian Federation">Russian Federation</option>
          <option value="Rwanda">Rwanda</option>
          <option value="Saint Helena">Saint Helena</option>
          <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
          <option value="Saint Lucia">Saint Lucia</option>
          <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
          <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
          <option value="Samoa">Samoa</option>
          <option value="San Marino">San Marino</option>
          <option value="Sao Tome and Principe">Sao Tome and Principe</option>
          <option value="Saudi Arabia">Saudi Arabia</option>
          <option value="Senegal">Senegal</option>
          <option value="Serbia">Serbia</option>
          <option value="Seychelles">Seychelles</option>
          <option value="Sierra Leone">Sierra Leone</option>
          <option value="Singapore">Singapore</option>
          <option value="Slovakia">Slovakia</option>
          <option value="Slovenia">Slovenia</option>
          <option value="Solomon Islands">Solomon Islands</option>
          <option value="Somalia">Somalia</option>
          <option value="South Africa">South Africa</option>
          <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
          <option value="Spain">Spain</option>
          <option value="Sri Lanka">Sri Lanka</option>
          <option value="Sudan">Sudan</option>
          <option value="Suriname">Suriname</option>
          <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
          <option value="Swaziland">Swaziland</option>
          <option value="Sweden">Sweden</option>
          <option value="Switzerland">Switzerland</option>
          <option value="Syrian Arab Republic">Syrian Arab Republic</option>
          <option value="Taiwan, Province of China">Taiwan, Province of China</option>
          <option value="Tajikistan">Tajikistan</option>
          <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
          <option value="Thailand">Thailand</option>
          <option value="Timor-leste">Timor-leste</option>
          <option value="Togo">Togo</option>
          <option value="Tokelau">Tokelau</option>
          <option value="Tonga">Tonga</option>
          <option value="Trinidad and Tobago">Trinidad and Tobago</option>
          <option value="Tunisia">Tunisia</option>
          <option value="Turkey">Turkey</option>
          <option value="Turkmenistan">Turkmenistan</option>
          <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
          <option value="Tuvalu">Tuvalu</option>
          <option value="Uganda">Uganda</option>
          <option value="Ukraine">Ukraine</option>
          <option value="United Arab Emirates">United Arab Emirates</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="United States">United States</option>
          <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
          <option value="Uruguay">Uruguay</option>
          <option value="Uzbekistan">Uzbekistan</option>
          <option value="Vanuatu">Vanuatu</option>
          <option value="Venezuela">Venezuela</option>
          <option value="Viet Nam">Viet Nam</option>
          <option value="Virgin Islands, British">Virgin Islands, British</option>
          <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
          <option value="Wallis and Futuna">Wallis and Futuna</option>
          <option value="Western Sahara">Western Sahara</option>
          <option value="Yemen">Yemen</option>
          <option value="Zambia">Zambia</option>
          <option value="Zimbabwe">Zimbabwe</option>
        </select>
        <input
          defaultValue={email || ''}
          className="profile_input"
          type="Email"
          placeholder="Email"
          onChange={emailChange}
          required
        />
        <input
          defaultValue={number || ''}
          className="profile_input"
          type="tel"
          placeholder="Phone Number"
          onChange={numberChange}
          required
        />
        <Button formButton="Update" />
      </form>
      </React.Fragment> :

      <React.Fragment>
      <form className="update_profile_form" onSubmit={handlePasswordChange}>
        <p className={passwordErrorClass.credentials}>{passwordError.credentials}</p>
        <p className={classNamePassword}>Password changed!</p>
        <h3>Change Password</h3>
        <input
          className="profile_input"
          autoComplete="current-password"
          type="password"
          placeholder="Old Password"
          onChange={oldPasswordChange}
          required
        />
        <input
          className="profile_input"
          autoComplete="new-password"
          type="password"
          placeholder="New Password"
          onChange={newPasswordChange}
          required
        />
        <p className={passwordErrorClass.matched}>{passwordError.matched}</p>
        <input
          className="profile_input"
          autoComplete="new-password"
          type="password"
          placeholder="Confirm Password"
          onChange={confirmPasswordChange}
          required
        />
        <Button formButton="Change Password" />
      </form>
      </React.Fragment>}
    </div>
  );
}

export default ProfileForm;