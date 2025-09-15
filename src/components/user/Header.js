import '../../styles/user/Header.css';

function Header() {
  return (
    <div className="header">
      <i
        className="profile-icon fa-solid fa-circle-user"
        onClick={() => window.location.href = `/#/profile`}
      />
    </div>
  );
} export default Header;