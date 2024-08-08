import style from './LogIn.module.scss'

const LogIn = () => {
  return (
    <div className={style.loginContainer}>
      <h2>MY ACCOUNT</h2>
      <form action="" method="post">
        <input type="email" name=""  placeholder="Email Address" />
        <input type="password" name=""  placeholder="Password" />
      </form>
      <p>FORGOT PASSWORD</p>

      <button>SIGN IN</button>
      <button>CREATE ACCOUNT</button>
    </div>
  )
}

export default LogIn
