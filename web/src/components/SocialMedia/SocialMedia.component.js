import './SocialMedia.style.css';

export function SocialMediaItem({ keyword, icon, link, style }) {
    return (
        <div className="social__icon" style={style}>
            <a href={link} target="_blank" rel="noreferrer">
                <i className={icon} title={keyword} aria-label={"Go to " + keyword} />
            </a>
        </div>
    )
}

export default function SocialMedia({ social_media_items }) {
    return (
        <div className="social__container">
            {social_media_items.map(s =>
                <SocialMediaItem key={s.keyword} {...s} />
            )}
        </div>
    )
}