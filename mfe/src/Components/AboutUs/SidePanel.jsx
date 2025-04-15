import React, {useState} from 'react';

const SidePanel = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div id="side-panel">
      <div id="side-panel-trigger-close" className="side-panel-trigger">
        <a href="#"><i className="bi-x-lg"></i></a>
      </div>
      <div className="side-panel-wrap">
        <div className="widget">
          <h4 className="fw-normal">Login with Social Profiles</h4>
          <a href="#" className="button button-rounded fw-normal w-100 text-center ms-0 bg-facebook">Facebook</a>
          <a href="#" className="button button-rounded fw-normal w-100 text-center ms-0 bg-google">Google</a>
          <div className="line"></div>
          <h4 className="fw-normal">Existing Account?</h4>
          <form id="login-form" name="row mb-0" className="mb-0" action="#" method="post">
            <div className="col-12 form-group">
              <label htmlFor="login-form-username" className="fw-normal">Username:</label>
              <input
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                name="login-form-username"
                className="form-control"
                value={username}
              />
            </div>
            <div className="col-12 form-group">
              <label htmlFor="login-form-password" className="fw-normal">Password:</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                name="login-form-password"
                value={password}
              />
            </div>
            <div className="col-12 form-group">
              <div className="d-flex justify-content-between">
                <button
                  className="button button-rounded fw-normal m-0"
                  id="login-form-submit"
                  name="login-form-submit"
                  value="login"
                >Login</button>
                <a href="#">Forgot Password?</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SidePanel