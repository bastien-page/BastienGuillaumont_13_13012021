import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar(props) {
  const first = useSelector((state) => state.userReducer.firstName);

  const signOut = () => {
    localStorage.removeItem("jwt");
    window.location = "/";
  };

  const profilePage = (
    <div>
      <Link className="main-nav-item" to="/profile">
        <i className="fa fa-user-circle"></i>
        {first}
      </Link>
      <button onClick={() => signOut()} className="main-nav-item-btn">
        <i className="fa fa-sign-out"></i>
        Sign Out
      </button>
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

      {localStorage.getItem("jwt") != null ? (
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
