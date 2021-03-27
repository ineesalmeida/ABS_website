import Gallery from '../components/Gallery/Gallery.component';
import { Container, ContainerColumn } from '../components/Container/Container.component';
// import screenshot_1 from '../assets/img/screenshot_1.png';
// import screenshot_2 from '../assets/img/screenshot_2.png';
import screenshot_3 from '../assets/img/screenshot_3.png';
// import screenshot_4 from '../assets/img/screenshot_4.png';
// import screenshot_5 from '../assets/img/screenshot_5.png';
// import screenshot_6 from '../assets/img/screenshot_6.png';
// import screenshot_7 from '../assets/img/screenshot_7.png';
// import screenshot_8 from '../assets/img/screenshot_8.png';


export default function AboutPage() {

    let screenshots = [
        // screenshot_1,
        // screenshot_2,
        screenshot_3,
        // screenshot_4,
        // screenshot_5,
        // screenshot_6,
        // screenshot_7,
        // screenshot_8,
    ]

    return (
        <Container>
            <ContainerColumn>
                <span>
                    Beers & Boomerangs is a VR game where you are trying to have a peaceful  barbecue with your mates, but thirsty adorable <b>Kangaroos</b> are trying to steal your beer. Protect your beers with your most loyal <b>Boomerang</b>
                </span>
            </ContainerColumn>
            <ContainerColumn>
                <Gallery images={screenshots} />
            </ContainerColumn>
        </Container >
    )
}