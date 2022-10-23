import styled from "styled-components";

const Header = (props) => {
    return(
        <Navbar>
            <Logo>
                <img src="/images/logo.svg" alt="Disney+" />
            </Logo>
            <Navmenu>

                <a href="/home">
                    <img src="/images/home-icon.svg" alt="home"/>
                    <span>Menu</span>
                </a>
                <a href="/search">
                    <img src="/images/search-icon.svg" alt="home"/>
                    <span>Search</span>
                </a>
                <a href="/watchlist">
                    <img src="/images/watchlist-icon.svg" alt="home"/>
                    <span>watchlist</span>
                </a>
                <a href="/orignals">
                    <img src="/images/original-icon.svg" alt="home"/>
                    <span>Orignals</span>
                </a>
                <a href="/movies">
                    <img src="/images/movie-icon.svg" alt="home"/>
                    <span>Movies</span>
                </a>
                <a href="/series">
                    <img src="/images/series-icon.svg" alt="home"/>
                    <span>Series</span>
                </a>
                
            </Navmenu>
            <Login>Login</Login>
        </Navbar>
    )
}

const Logo = styled.a`
    padding: 0;
    width: 80px;
    font-size: 0px;
    max-height: 70px;
    display: inline-block;
    img{ 
        display: block;
        width: 100%;
    }
`;

const Navbar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #040714;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 25px;
    height: 80px;
    letter-spacing: 2px;
    z-index: 3;
`;

const Navmenu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-right: auto;
    margin-left: 25px;

    a{
        display: flex;
        align-items: center; 
        padding: 0 12px;

        img{
            height: 25px;
            min-width: 20px;
            width: 20px;
            z-index: auto;
        }

        span{
            color: white;
            display: inline-block;
            font-size: 12px;
            position: relative;
            white-space: nowrap;
            padding: 0px 2px;
            text-transform: uppercase;
        
        
            &:after{
                content: '';
                position: absolute;
                width: 100%;
                transform: scaleX(0);
                height: 2px;
                bottom: -5px;
                left: 0;
                background-color: white;
                transform-origin: bottom right;
                transition: transform 0.25s ease-out;
            }

            &:hover:after{
                transform: scaleX(1);
                transform-origin: bottom left;
            }
        }
    }

    @media (max-width: 920px){
        display: none;
    }
`;

const Login = styled.a`
    background-color: rgba(0,0,0,0,0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    border: 1px solid white;
    border-radius: 4px;
    transition: all .2s ease-in-out;

    &:hover{
        background-color: white;
        color: black;
        border-color: transparent;
    }
`;

export default Header;