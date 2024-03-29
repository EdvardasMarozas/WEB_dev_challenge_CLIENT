import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {

    return (
    <>
      <form className="dropdown-menu p-4">
        <div className="form-group">
          <label htmlFor="exampleDropdownFormEmail2">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleDropdownFormEmail2"
            placeholder="email@example.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleDropdownFormPassword2">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleDropdownFormPassword2"
            placeholder="Password"
          />
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="dropdownCheck2" />
          <label className="form-check-label" htmlFor="dropdownCheck2">
            Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>
    </>
  );
}
export default Login;
