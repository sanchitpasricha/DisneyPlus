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
                </a>
                <span>Menu</span>
            </Navmenu>
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

    @media (max-width: 768px){
        display: none;
    }
`;

export default Header;