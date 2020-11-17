import './InfoBar.css';
import Button from '../Button';

const InfoBar = ({ info }) => {

  return (
    <div className="InfoBar">
      <div className="infobar_content">
        <h3>{info.heading}</h3>
        <p>{info.paragraph}</p>
        <Button 
          href={info.ghostButtonHref} 
          ghostButton={info.ghostButton} 
          ghostButtonContent={info.ghostButtonContent} 
        />
      </div>
    </div>
  );
}

export default InfoBar;