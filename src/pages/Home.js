import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <>
            <Header>
                <div></div>
                <div style={{width: '50%', backgroundColor:'#33333380'}}>Logo</div>
                <div className='login-row' style={{gap:'36px'}}>
                    <Link to={'cadastro'} className='text-link'>
                        Cadastre-se
                    </Link>
                    <Link to={'login'} className='text-link'>
                        Login
                    </Link>
                </div>
            </Header>
            <h1>
                Home
            </h1>
            <Footer>Home</Footer>
        </>
    )
}