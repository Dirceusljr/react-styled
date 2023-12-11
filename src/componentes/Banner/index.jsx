import styled from "styled-components";

// Solução do Desafio Alura
const FigureEstilizada = styled.figure`
    background-image: ${props => `url(${props.$backgroundImage})`};
    flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    min-height: 328px;
    margin: 0;
    border-radius: 20px;
    max-width: 100%;
    background-size: cover;
`

const TituloEstilizado = styled.h1`
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #FFFFFF;
    max-width: 300px;
    padding: 0 64px;
`
const Banner = ({texto, backgroundImage}) => {
    return (<FigureEstilizada $backgroundImage={backgroundImage}>
        <TituloEstilizado>{texto}</TituloEstilizado>
    </FigureEstilizada>)
}

export default Banner


// const BannerEstilizado = styled.div`
//     background-image: url('src/assets/banner.png');
//     margin: 0;
//     padding: 0;
//     max-width: 1156px;
//     height: 328px;
//     border-radius: 20px;
//     opacity: 0.8;
//     position: relative;
//     p {
//         margin: 0;
//         padding: 0;
//         color: #FFF;
//         font-size: 40px;
//         line-height: normal;
//         width: 300px;
//         position: absolute;
//         left: 64px;
//         top: 92px;
//     }
// `

// const Banner = () => {
//     return (
//         <BannerEstilizado>
//             <p>A galeria mais completa de fotos do espaço!</p>
//         </BannerEstilizado>
//     )
// }

// export default Banner