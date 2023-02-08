import { Style } from "./style";

import { PasswordField, TextField } from "../../inputs";

interface FormEnterProps {
    btnText: string;
}
export function FormEnter({ btnText }:FormEnterProps) {
    return (
        <Style>
            <TextField type="text" placeholder="Username"/>
            <PasswordField type="text" placeholder="Password"/>

            <button>
                {btnText}
            </button>
        </Style>
    )
}