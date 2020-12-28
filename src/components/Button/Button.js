import './Button.css';

const Button = ({ href, ghostButton, ghostButtonContent, formButton, onClick }) => {

  return (
    <div className="Button">
      {ghostButton === 'ghost'
      ?
        <a href={href} className="ghost_button">{ghostButtonContent}</a>
      :
        <input className="form_button" type="submit" value={formButton} onClick={onClick} />}
    </div>
  );
}

export default Button;