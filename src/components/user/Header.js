import Styles from '../../styles/Styles.module.css';
import '../../styles/user/Header.css';

function Header() {
  return (
    <div className="header">
      <i
        className={`profile-icon fa-solid fa-circle-user ${Styles.blueProfileIcon}`}
        onClick={() => window.location.href = `/#/profile`}
      />
    </div>
  );
} export default Header;