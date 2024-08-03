// import { useNavigate } from "react-router-dom";
import { useLogin } from "../github";
import './login.css'
import logo from "./github-mark-white.png"
export const Login = () => {
  const { login, isPending } = useLogin();

  return(
    <div className="Button">
    <button className="btn btn-primary" onClick={login} ><img src={logo} width={20} alt="logo" style={{marginRight:"1vw"}}/>
        {isPending ? "Loading..." : "Github"}
    </button>
</div>
  )
}
    
