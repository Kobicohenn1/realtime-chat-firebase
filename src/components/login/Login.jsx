import { useState } from 'react';
import './login.css';

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: '',
  });

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };
  return (
    <div className="login">
      <div className="item">
        <h2>Welcome Back,</h2>
        <form className="sigin" action="">
          <input type="text" name="email" placeholder="Email" />
          <input type="text" name="password" placeholder="Password" />
          <button className="signin">Sign In</button>
        </form>
      </div>
      <div className="separator"></div>
      <div className="item">
        <h2>Create An Account</h2>
        <form action="">
          <label htmlFor="file">
            <img src={avatar.url || './avatar.png'}></img>
            Upload an Image
          </label>
          <input
            type="file"
            id="file"
            style={{ display: 'none' }}
            onChange={handleAvatar}
          />
          <input type="text" name="username" placeholder="User Name" />
          <input type="text" name="email" placeholder="Email" />
          <input type="text" name="password" placeholder="Password" />
          <button className="signin">Sign up</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
