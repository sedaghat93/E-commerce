import PasswordShowHide from "../../Components/PasswordShowHide.js/PasswordShowHide";
import "./Signup.scss";


const InputForm = ({name, formik,type,label}) => {


    return ( 
        <div className="information flex ">
            <label htmlFor={name} className="px-2" >{label}</label>
                <input 
                    {...formik.getFieldProps(name)}
                    id={name}
                    type={type} 
                    className="input-information"
                    name={name}
                />
                {formik.errors[name] && formik.touched[name] && ( <div className="error">{formik.errors[name]}</div>)}
        </div>
     );
}
 
export default InputForm;