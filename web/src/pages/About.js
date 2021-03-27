import Gallery from '../components/Gallery/Gallery.component';
import { Container, ContainerColumn } from '../components/Container/Container.component';
import Team from '../components/Team/Team.component';
import about_page_img from '../assets/img/about-page.png';


export default function AboutPage() {

    return (
        <Container style={{alignItems: "start"}}>
            <ContainerColumn style={{flex: 3, padding: "3rem"}}>
                <span>
                    Beers & Boomerangs is a VR game where you are trying to have a peaceful barbecue with your mates, but <s>adorable</s> annoying <b>Kangaroos</b> are trying to steal your beer! Protect your beers with your trustworthy <b>Boomerang</b>.

                    <br /><br />
                </span>
                <h2>The team</h2>
                <span>
                    We are a couple of engineers that enjoy programming, arts, music and games. We started working on this project on our free time. In 2021, Diogo quit his job to focus on this game full-time. We currently live in a game-developer house in Sweden.
                    
                    <br /><br />
                    Reach us at <u>contact@beersandboomerangs.com</u></span>
                <Team />
            </ContainerColumn>
            <ContainerColumn style={{flex: 2}}>
                <div className="font_page_image">
                    <img src={about_page_img} alt="game-play"></img>
                </div>
            </ContainerColumn>
        </Container >
    )
}