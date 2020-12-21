import './Profilebar.css';
import upload from '../../../assets/user-upload.png'

const Profilebar = ({ profileData }) => {

  const registered = profileData.registered_on;

  const time = new Date(registered).toLocaleTimeString();
  const date = new Date(registered).toDateString();

  return (
    <div className="Profilebar">
      <div className="img_content">
        <img src={upload} alt="upload" width="150px" />
      </div>
      <div className="profilebar_contents">
        <p>Registered On:<span>{date}</span><span>{time}</span></p>
        <p>Local Time: <span>11:45(GMT) London (hard coded data)</span></p>
      </div>
    </div>
  );
}

export default Profilebar;