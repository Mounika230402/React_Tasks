import classNames from "classnames";
import { useLogout } from "./github";
import styles from './login.module.css'
import { useNavigate } from "react-router-dom";
export const LogOut = () => {
  const { logout } = useLogout();
  let LogoutButton=classNames(styles.login_btn,styles.primary,)
  let CancelButton=classNames(styles.login_btn,styles.google)
const navigate=useNavigate()
  return(
    <div className={styles.login_container} style={{maxWidth:"450px"}}>
      <h1>Are you sure you want to logout?</h1>
    <div className={styles.login_buttons}>
    <button className={LogoutButton} style={{marginLeft:"13px"}} onClick={logout} >
        Logout
    </button>
    <button className={CancelButton} onClick={()=>{navigate("/Recipes")}} >
        Cancel
    </button>
    </div>
</div>
  )
}