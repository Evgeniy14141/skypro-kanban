import Login from "../components/Login/Login";
//import { GlobalStyle } from "../global.styled";

export const LoginPage = ({ login }) => {
    return (
        <>
        {/*<GlobalStyle />*/}
        <div className="wrapper">
            <Login login = {login}/>
        </div>
        </>
    );
};

export default LoginPage;
