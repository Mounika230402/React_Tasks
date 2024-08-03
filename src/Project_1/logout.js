import { useLogout } from "../github";
import './login.css'
export const LogOut = () => {
  const { logout } = useLogout();

  return(
    <div className="Button">
    <button className="btn btn-primary" onClick={logout} >
        Logout
    </button>
</div>
  )
}