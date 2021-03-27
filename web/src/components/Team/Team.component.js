import React from 'react';
import './Team.style.css';
import { SocialMediaItem } from '../SocialMedia/SocialMedia.component';

function MiniSocialMediaItem({ keyword, icon, link }) {
    return (
        <SocialMediaItem
            keyword={keyword}
            icon={icon}
            link={link}
            style={{
                width: "0.8rem", height: "0.8rem", padding: "2rem 1rem",
                marginRight: "0rem"
            }} />
    )
}


export default function Team() {

    const diogo_social = [
        {
            keyword: 'Twitter',
            icon: 'fab fa-twitter',
            link: 'https://twitter.com/jdiogobc/',
        },
        {
            keyword: 'Personal Website',
            icon: 'fas fa-globe',
            link: 'https://diogo-cunha.com/',
        },
    ]

    const ines_social = [
        {
            keyword: 'Personal Website',
            icon: 'fas fa-globe',
            link: 'https://ines-almeida.com/',
        },
    ]

    return (
        <div className="team">
            <div className="team__item">
                <div className="team__img">
                    <img src="https://pbs.twimg.com/profile_images/488710497500274688/K2v3ZCF__400x400.jpeg" />
                </div>
                <p><b>Diogo Cunha</b></p>
                <p><small>diogo@beersandboomerangs.com</small></p>
                <div className="team__social">
                    {diogo_social.map((item) => <MiniSocialMediaItem {...item} />)}
                </div>
            </div>
            <div className="team__item">
                <div className="team__img">
                    <img src="https://ines-almeida.com/me.jpg" />
                </div>
                <p><b>Inês Almeida</b></p>
                <p><small>ines@beersandboomerangs.com</small></p>
                <div className="team__social">
                    {ines_social.map((item) => <MiniSocialMediaItem {...item} />)}
                </div>
            </div>
        </div>
    )
}


