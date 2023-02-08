import styled from "styled-components";

export const StyleBg = styled.div `
    position: absolute;
`;
export const Style = styled.div `
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
        margin-bottom: 12px;
        color: #666666;
        font-size: 18px;
        font-weight: 400;
    }

    h1 {
        margin-bottom: 34px;
        font-size: 30px;
        font-weight: 500;
        letter-spacing: 7px;
        text-transform: uppercase;
    }

    a {
        padding: 5px 23px;

        position: absolute;
        bottom: 40px;
        
        background: #24252A;
        box-shadow: 0px 4px 24px 0px #000000;
        border-radius: 13px;
        
        text-decoration: none;
        font-size: 16px;
        font-weight: 600;
        color: white;
    }
`;