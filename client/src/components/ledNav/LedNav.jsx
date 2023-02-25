import logo from '../../assets/logo.png';
import user from '../../assets/user.jpg'
import './lednav.css';

const LedNav = () => {
  return (
    <div className="led__lednav">
       <div className="led__lednav-links_logo">
          <img src={logo} />
        </div>
      <div className="led__lednav-links">
       
        <div className="led__lednav-links_container">
          <p>bneogi102002</p>
        </div>
      </div>
      <div className="led__lednav-sign">
          <img src={user} />
      </div>
      
      </div>
  );
};

export default LedNav;
