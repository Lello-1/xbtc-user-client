import './Profile.css';
import Sidebar from '../../components/Sidebar';
import ProfileBar from './Profile-Bar';
import ProfileForm from './Profile-Form';
import { useEffect, useState } from 'react';

const options = {
  method: 'GET',
  credentials: 'include',
  headers: {
    'Content-Type': 'Application/JSON'
  }
}

const apiUrl = '/user/profile-data';

const Profile = () => {

  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    fetch(apiUrl, options)
    .then((res) => res.json())
    .then((res) => {
      setProfileData(res);
    });
  }, []);

  return (
    <div className="Profile">
      <div className="profile_grid">
        <Sidebar />
        <div className="profile_container">
          <div className="profile_profilebar">
            <ProfileBar profileData={profileData} />
          </div>
          <div className="profile_profileform">
            <ProfileForm updateProfile={true} profileData={profileData} />
          </div>
          <div className="change_password">
            <ProfileForm updateProfile={false} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;