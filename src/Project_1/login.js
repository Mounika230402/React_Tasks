// import { useNavigate } from "react-router-dom";
import { useLogin } from "./github";
import styles from'./login.module.css'
import logo from "./github-mark-white.png"
import logo1 from "./facebook.png"
import classNames from "classnames";
import { Link } from "react-router-dom";
export const Login = () => {
  const { login, isPending } = useLogin();
  let facebook1=classNames(styles.login_btn,styles.facebook)
  let google1=classNames(styles.login_btn,styles.google)
  let button1=classNames(styles.login_btn,styles.primary)
  return(
<>
<div className={styles.login_container}>
      <div className={styles.login_buttons}>
        <button className={facebook1}><img src={logo1} width={20} alt="logo" style={{marginRight:"1vw"}}/>Login with Facebook</button>
        <button className={google1} onClick={login}><img src={logo} width={20} alt="logo" style={{marginRight:"1vw"}}/>{isPending ? "Loading..." : "Login with Github"}</button>
      </div>
      <div className={styles.divider}>
        <span>OR</span>
      </div>
      <form className={styles.login_form}>
        <div className={styles.input_group}>
          <input type="email" placeholder="Email Address *" />
        </div>
        <div className={styles.input_group}>
          <input type="password" placeholder="Password *" />
        </div>
        <div className="options">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <Link className={styles.forgot_password}>Forgot Password</Link>
        </div>
        <button type="submit" className={button1} onClick={login}>LOGIN</button>
      </form>
      <div className={styles.signup_link}>
        Don’t have an account? <Link href="#">Sign up</Link>
      </div>
    </div></>
   
//     <div className="Button">
//     <button className="btn btn-primary" onClick={login} ><img src={logo} width={20} alt="logo" style={{marginRight:"1vw"}}/>
//         
//     </button>
// </div>

  )
}
    
