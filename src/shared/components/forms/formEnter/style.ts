import styled from "styled-components";

export const Style = styled.form `
    width: 350px;

    z-index: 1000;
    
    display: flex;
    flex-direction: column;

    button {
        margin-top: 72px;
        height: 45px;
        background: #DA4D8C;
        border: 1px solid #DA4D8C;
        border-radius: 5px;

        color: #FDFDFD;

        font-size: 14px;
        font-weight: 700;
        letter-spacing: 3px;
        text-transform: uppercase;

        cursor: pointer;
    }
`;