// import React, { useState } from "react";
// import "./PasswordShowHide.css";
// import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

// import { useState } from "react";

// const PasswordShowHide = ({ field, form }) => {
//   const [showHidePassword, changeShowHidePassword] = useState(false);
//   const hasError = form.touched[field.name] && form.errors[field.name];

//   return (
//     <div className="input-information">
//       <i
//         className={hasError ? "icon-error icon" : "fa fa-key icon"}
//         onClick={() => changeShowHidePassword(!showHidePassword)}
//       >
//         <span><FaRegEye/></span>
//       </i>
//       <input
//         type={showHidePassword ? "text" : "password"}
//         {...field}
//         className={hasError ? "input-error input-field" : "input-field"}
//         placeholder="Password"
//       />
//     </div>
//   );
// };

// export default PasswordShowHide;


// import {IconButton, InputAdornment, Input, InputLabel} from "@material-ui/core";
// import {Visibility, VisibilityOff} from "@material-ui/icons";
// import "./PasswordShowHide.css";

// const PasswordShowHide = () => {

//   const [values,setValues] = useState({
//     password:"",
//     showPassword:false
//   });

//   const handleClickShowPassword = () => {
//     setValues({...values, showPassword:!values.showPassword})
//   }

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   }

//   const handlePasswordChange = (prop) => (event) => {
//     setValues({...values,[prop]:event.target.value})
//   }


//   return ( 
//     <div>
//       {/* <InputLabel htmlFor="standard-adornment-password">enter your password</InputLabel> */}
//       <Input className="input-section" type={values.showPassword ? "text" : "password"} 
//         value={values.password}
//         onChange={handlePasswordChange("password")}
//         endAdornment={
//           <InputAdornment position="end">
//             <IconButton 
//               onClick={handleClickShowPassword}
//               onMouseDown={handleMouseDownPassword}>
//                 {values.showPassword ? <Visibility/> : <VisibilityOff/>}
//             </IconButton>
//           </InputAdornment>
//         } 
//       />
//     </div>
//    );
// }
 
// export default PasswordShowHide;


import { useState } from 'react';
import showPwdImg from './show-password.svg';
import hidePwdImg from './hide-password.svg';
import "./PasswordShowHide.css";

function PasswordShowHide() {
  const [pwd, setPwd] = useState('');
  const [isPwd, setIsPwd] = useState(false);

  return (
      <div className="pwd-container">
        <input
          name="pwd"
          type={isPwd ? 'text' : 'password'}
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
        <img
          title={isPwd ? 'Hide password' : 'Show password'}
          src={isPwd ? showPwdImg : hidePwdImg}
          onClick={() => setIsPwd((prevState) => !prevState)}
        />
      </div>
  );
}

export default PasswordShowHide;

