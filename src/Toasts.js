import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Toast(prop){
    // let Customstyles={marginTop:"100vw"}
    const {status,msg=status}=prop
    const result=(status,msg)=>{
        switch(status){
            case "success":
                return toast.success(msg)
            case "error":
                return toast.error(msg)
                case "info":
                    return toast.info(msg)
            default:
                return toast.warning(msg)
        }
    }
    

  return (
    <div>
      {/* <button onClick={result}>{status}</button> */}
      {
        result(status,msg)
      }
      <ToastContainer
position="top-right"
// style={Customstyles}
autoClose={4000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
<ToastContainer />

    </div>
  );
}
export default Toast;



