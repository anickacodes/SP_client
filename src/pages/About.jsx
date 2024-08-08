import "../App.css";

const About = () => {
  return (
    <div className="about_container">
      <div className="hero">
        <h1>Background</h1>
        <p className="subtitle">
          <i>Supportiveness</i> officially began as a conversation in an
          underground NYC parlour during a PrideFest volunteering event.{" "}
          <br></br>Unofficially, <i>Supportiveness</i> was born out of the
          commitment to uplift communities - particularly where individuals'
          felt their needs were invisible.
        </p>
      </div>

      <div className="mission">
        <h2>What we do</h2>
        <p>
          <i>Supportiveness</i> aims to enrich and empower individuals through
          collaborative and safe spaces, fostering open and vulnerable
          communication. <br></br>
          <b>Growth, evolution and enlightenment</b> take various forms along an
          individual's path - yet not everyone recognizes these transformations
          as opportunities. <br></br>
          Some individuals peceive these opportunities but hesitate to seize
          them due to mental barriers or percived shortcomings.
        </p>
      </div>

      <div className="values">
        <h2>Values</h2>
        <p>
          At <i>Supportiveness</i>, we believe the most effective communications
          stems from being open, honest, vulnerable.<br></br> This starts with
          being true to ourselves. Recognize your strengths, shortcomings and
          areas for improvements. <br></br>When speaking, do so from the heart
          with kindness - as we never know 100% what someone is dealing with.{" "}
        </p>
      </div>

      <div className="inspiration">
        <h2>Inspiration</h2>
        <p>
          As an introvert, I prefer conversations with myself and my guidance
          team, those who can understand and provide clear direction to the
          answers I seek.<br></br> I can reflect my thoughts at my pace, and
          through discernment, determine my next steps. There are times however,
          when I need that reliable sounding board to process my pressing
          thoughts.
        </p>
      </div>
    </div>
  );
};

export default About;
