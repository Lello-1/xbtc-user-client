import './Profilebar.css';
import upload from '../../../assets/user-upload.png'

const Profilebar = () => {

  return (
    <div className="Profilebar">
      <img src={upload} alt="upload" width="175px" />
      <div className="profilebar_contents">
        <p>Registered On:<span>01/11/2019</span><span>23:30</span></p>
        <p>Local Time: <span>11:45(GMT) London</span></p>
      </div>
    </div>
  );
}

export default Profilebar;