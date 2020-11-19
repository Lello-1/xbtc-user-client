import './Profile.css';
import Sidebar from '../Sidebar';
import ProfileBar from './Profile-Bar';
import ProfileForm from './Profile-Form';

const Profile = () => {

  return (
    <div className="Profile">
      <div className="profile_grid">
        <Sidebar />
        <div className="profile_container">
          <div className="profile_profilebar">
            <ProfileBar />
          </div>
          <div className="profile_profileform">
            <ProfileForm updateProfile={true} />
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