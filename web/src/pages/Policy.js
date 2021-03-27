import { Container, ContainerColumn } from '../components/Container/Container.component';
import policy_image from '../assets/img/front-page.png';


export default function PolicyPage() {
    return (
        <Container style={{ alignItems: "start" }}>
            <ContainerColumn key="left">
                <div className="policy_image">
                    <img src={policy_image} alt="game-play"></img>
                </div>
            </ContainerColumn>
            <ContainerColumn key="right">
                <div class="policy_text">
                    <h1>Privacy Policy</h1>

                    We do not collect any kind of personal data. We do not ask our players to provide personal data, nor do we use any third-party tools to determine this whatsoever. While the game engines we use may offer personal data services, we do not use them.

                    <h2>Unity Engine</h2>

                    For our game, we use the Unity engine as our development platform and Unity Analytics to determine the performance of players of our games.

                    Third-Party privacy policy of Unity (https://unity3d.com/legal/privacy-policy)

                    This includes – how well the games go, how long they take, and what kind of pre-game set-up is used. None of this information can ever be matched to a specific user.

                    To speed up our development of games, we have opted to use game engines. One of these is the Unity Engine, and we use this for our VR game releases. This game engine requires technical data about the player’s device to work, which includes the manufacturer, hardware components, device and network identifiers and the system language. This technical data is sent to Unity and accumulated in statistics, which are publicly available. The game or our company has no control over how Unity uses such information, yet it is also anonymous.

                    <h2>Oculus</h2>
                    If you are playing with an Oculus device, changes are you have an Oculus/Facebook account, and you already agreed to their privacy policy.

                    Here's is Oculus Privacy Policy Link if you want to check it out (https://www.oculus.com/legal/privacy-policy/)

                    <h2>Other Engines</h2>

                    There is no data collection performed currently on any other game engines that we use.
                </div>
            </ContainerColumn>
        </Container>
    )
}
