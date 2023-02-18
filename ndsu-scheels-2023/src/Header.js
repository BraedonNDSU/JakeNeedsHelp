import './Header.css';
import Logo from './images/ScheelsLogo.png';

//Class to change ONLY header
function Header() {
  return (
    <div className="Header">
        
        <img src = {Logo}/>
        
    </div>
  );
}

export default Header;