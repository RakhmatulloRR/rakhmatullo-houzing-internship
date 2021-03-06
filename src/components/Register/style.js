import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 1440px;
    padding: 64px 130px;
    display: flex;
    justify-content: center;
    @media (max-width: 768px) {
        width: 100%;
        padding: 64px 0;
    }
`

const Form = styled("div")`
    width: 580px;
    background: #FFFFFF;
    border: 1px solid #E6E9EC;
    box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
    border-radius: 3px;
    padding: 24px 30px 48px 30px;
    @media (max-width: 768px) {
        width: 95%;
    }

`

const Title = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    color: #0D263B;
    margin-bottom: 25px;
`



export { Container, Wrapper, Form,  Title }