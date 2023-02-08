import EyeClose from "../../../assets/icon/eye-close";
import EyeOpen from "../../../assets/icon/eye-open";

import { 
    Style,
    PasswordFieldStyle
} from "./style";

interface InputProps {
    type?: string;
    placeholder: string;
}

export function TextField({type, placeholder}:InputProps) {
    return (
        <Style 
            type={type} 
            placeholder={placeholder}
        />
    )
}

export function PasswordField({placeholder}:InputProps) {
    return (
        <PasswordFieldStyle>
            <input type="password" placeholder={placeholder}/>
            <EyeOpen/>
        </PasswordFieldStyle>
    )
}