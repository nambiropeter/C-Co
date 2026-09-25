import ResponsiveImage from './ResponsiveImage';
import { STORY_SIZES } from '../data/siteContent';

export default function SuccessStoriesSection({ stories }) {
    return (
        <section id="success" className="reveal" aria-labelledby="success-title">
            <div className="container">
                <h2 className="sub-title" id="success-title">Success Stories</h2>
                <p className="section-intro">
                    A snapshot of the professionalism and care clients say they experience when working with the firm.
                </p>
                <ul className="success-stories">
                    {stories.map((story) => (
                        <li className="success1" key={story.id}>
                            <ResponsiveImage image={story.image} alt={story.alt} sizes={STORY_SIZES} />
                            <div className="layer">
                                <h3>{story.title}</h3>
                                <p>
                                    {story.copy}
                                    {story.extra ? (
                                        <>
                                            <br />
                                            {story.extra}
                                        </>
                                    ) : null}
                                </p>
                                <i className={story.icon} aria-hidden="true"></i>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
