export default function SuccessStoriesSection({ stories }) {
    return (
        <div id="success" className="reveal">
            <div className="container">
                
                <h2 className="sub-title">Success Stories</h2>
                <p className="section-intro">
                    A snapshot of the professionalism and care clients say they experience when working with the firm.
                </p>
                <div className="success-stories">
                    {stories.map((story) => (
                        <div className="success1" key={`${story.title}-${story.alt}`}>
                            <img src={story.image} alt={story.alt} loading="lazy" />
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
                                <i className={story.icon}></i>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
