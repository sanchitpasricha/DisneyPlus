import styled from "styled-components";

const Login = (props) => {
    return(
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
                    <SignUp>GET ALL THERE</SignUp>
                    <Description>
                        Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of
                        03/26/21, the price of Disney+ and the Disney Bundle will increase by Rs.80
                    </Description>
                    <CTALogoOne src="/images/cta-logo-two.png" alt="" />
                </CTA>
                <Bgimage/>
            </Content>
        </Container>
    ) 
};

const Container = styled.section`
    display: flex;
    overflow: hidden;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`;

const Bgimage = styled.div`
    background-image: url("/images/login-background.jpg");
    background-size: cover;
    z-index: -1;
    position: absolute;
    background-position: top;
    top: 0;
    right: 0;
    left: 0;
    height: 100%;
`;

const CTA = styled.div`
    max-width: 800px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CTALogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 800px;
    min-height: 1px;
    display: block;
    width: 100%;
`;

const SignUp = styled.a`
    font-weight: bold;
    color: white;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 20px;
    padding: 15px 0px;
    border: 1px solid transparent;
    border-radius: 4px;

    &:hover{
        background-color: #0483ee;
        cursor: pointer;
    }
`;

const Description = styled.p`
    color: white;
    font-size: 15px;
    margin: 10px 0 24px;
    line-height:  1.5;
    letter-spacing: 1.5px;
`;

export default Login;