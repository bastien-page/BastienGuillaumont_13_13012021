import { Link } from "react-router-dom";

function Navbar(props) {
  const profilePage = (
    <div>
      <Link className="main-nav-item" to="/user">
        <i className="fa fa-user-circle"></i>
        Tony
      </Link>
      <Link className="main-nav-item" to="/">
        <i className="fa fa-sign-out"></i>
        Sign Out
      </Link>
    </div>
  );

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>

      {props.page === "profile" ? (
        profilePage
      ) : (
        <div>
          <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
