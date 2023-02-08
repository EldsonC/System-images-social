import { BackPoints } from "../../assets/img/back-points"
import { FormEnter } from "../../shared/components/forms/formEnter"
import { Style, StyleBg } from "./style"

export function Login() {
    return (
        <>
            <StyleBg>
                <BackPoints/>
            </StyleBg>
            <Style>
                <span>Your Images</span>
                <h1>Login account</h1>
                <FormEnter btnText="Login"/>
                <a href="/register">
                    Create Account
                </a>
            </Style>
        </>
    )
}