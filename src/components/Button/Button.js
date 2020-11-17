import './Button.css';

const Button = ({ href, ghostButton, ghostButtonContent, formButton }) => {

  return (
    <div className="Button">
      {ghostButton === 'ghost' ? <a href={href} className="ghost_button">{ghostButtonContent}</a> :
      <input className="form_button" type="submit" value={formButton} />}
    </div>
  );
}

export default Button;