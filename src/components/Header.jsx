import styled from "styled-components";

const Header = (props) => {
    return(
        <Navbar>
            <Logo>
                <img src="/images/logo.svg" alt="Disney+" />
            </Logo>
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
    letter-spacing: 10px;
    z-index: 3;
`;

export default Header;