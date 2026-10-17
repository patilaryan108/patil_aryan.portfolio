import '../styles/Card3.css'

export default function Card3({ video, image, name, link }) {
    return (
        <>
            <a
                className="card3"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${name} on GitHub`}
            >
                {image ? (
                    <img
                        src={image}
                        alt={`${name} project preview`}
                        className="card3-image"
                    />
                ) : (
                    <video
                        src={video}
                        autoPlay
                        loop
                        muted
                        className="card3-video"
                    ></video>
                )}
                <p className="project-name">{name}</p>
            </a>
        </>
    );
}
