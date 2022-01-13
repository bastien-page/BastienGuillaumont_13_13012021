import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="app">
      <main className="main error">
        <h2 className="error__title">PAGE INTROUVABLE</h2>
        <Link className="error__link" to="/">
          Retourner à l'accueil
        </Link>
      </main>
    </div>
  );
}

export default Error;
