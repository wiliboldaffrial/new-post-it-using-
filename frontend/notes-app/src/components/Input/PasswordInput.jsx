import React from 'react';
import {FaRegEye, FaRegEyeSlash} from 'react-icons/fa6';

const PasswordInput = ({value, onChange, placeholder}) => {
    const [isShowPassword, setIsShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setIsShowPassword(!isShowPassword);
    };

    return (
        <div>
            <input
                value={value}
                onChange={onChange}
                type={isShowPassword ? "text" : "password"}
                placeholder={placeholder || "Password"}
                className=""
            />

            {isShowPassword ? (
                <FaRegEye
                    size={22}
                    className=""
                    onClick={() => toggleShowPassword()}
                />
            ) : (
                <FaRegEyeSlash
                    size={22}
                    className=""
                    onClick={() => toggleShowPassword()}
                />
            )}
        </div>
    )
}

export default PasswordInput;