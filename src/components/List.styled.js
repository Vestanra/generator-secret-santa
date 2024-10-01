import styled from "styled-components";

// @media (min-width: 480px) {
// }

// @media (min-width: 768px) {
// }

// @media screen and (min-width: 1200px) {

// }

export const Container = styled.div`
max-width: 428px;
margin: 0 auto;

@media (min-width: 768px) {
    max-width: 768px;
}

@media screen and (min-width: 1200px) {
    max-width: 1158px;
}
`

export const WrapperLists = styled.div`
display: flex;
flex-direction: column-reverse;
justify-content: space-between;
gap: 12px;
@media (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
}
`
export const Title = styled.h1`
text-align: center;
`

export const UlList = styled.ul`
width: 100%;
display: flex;
flex-direction: column;
text-align: center;
`

export const WrapperBtn = styled.div`
padding: 24px 0;
text-align: center;
/* @media (min-width: 768px) {

} */
`
// export const WrapperChangeReset = styled.div`
// display: flex;
// flex-direction: column;
// `

export const ChangeBtn = styled.button`
width: 200px;
height: 40px;
display: block;
margin: 24px auto;
`