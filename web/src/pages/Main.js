import { Container, ContainerColumn } from '../components/Container/Container.component';
import MailingListCall from '../components/MailingListCall/MailingListCall.component'; import front_page_img from '../assets/img/front-page.png';


export default function MainPage() {
    return (
        <Container>
            <ContainerColumn key="left">
                <div className="font_page_image">
                    <img src={front_page_img} alt="game-play"></img>
                </div>
            </ContainerColumn>
            <ContainerColumn key="right">
                <div>
                    <h2 className="header_title">
                        <span>You are having a Barbecue but </span>
                        <span className="emphasis_1">kangaroos are trying to steal your beer!</span>
                    </h2>
                    <p className="header_subtitle">
                        A VR video game under-development.<br />
                        <b>Release Date:</b> probably end of 2021
                    </p>
                </div>
                <MailingListCall />
            </ContainerColumn>
        </Container >
    )
}
