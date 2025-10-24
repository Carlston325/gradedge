function CvTemplateOne(props) {
  const data = props.data;

  return (
    <div className="cv-template">
      {/* Header */}
      <div className="cv-header">
        <h2 className="cv-name">{data.name}</h2>

        <div className="cv-contact">
          <span>{data.email}</span> | <span>{data.phone}</span> |{" "}
          <span>{data.location}</span>
        </div>
      </div>

      {/* Summary */}
      <div className="cv-section">
        <h3>Professional Summary</h3>
        <p>{data.summary}</p>
      </div>

      {/* Skills */}
      <div className="cv-section">
        <h3>Skills</h3>
        <div className="cv-skills">{data.skills}</div>
      </div>

      {/* Experience */}
      <div className="cv-section">
        <h3>Experience</h3>
        <div className="cv-job">
          <div className="cv-job-header">
            <div className="cv-job-title">Web Developer</div>
            <div className="cv-job-dates">Jan 2023 – Present</div>
          </div>
          <div className="cv-job-company">Journey of Results Ltd</div>
          <ul>
            <li>
              Built and maintained responsive web apps with React and Next.js.
            </li>
            <li>
              Worked closely with designers to improve UX and accessibility.
            </li>
            <li>Optimized performance, reducing load times by 40%.</li>
          </ul>
        </div>
      </div>

      {/* Education */}
      <div className="cv-section">
        <h3>Education</h3>
        <div className="cv-edu">
          <div className="cv-edu-header">
            <div className="cv-edu-title">BSc Computer Science</div>
            <div className="cv-edu-dates">2020 – 2023</div>
          </div>
          <div className="cv-edu-institution">University of Westminster</div>
        </div>
      </div>
    </div>
  );
}

function DefaultCv() {
  return (
    <div className="cv-template">
      {/* Header */}
      <div className="cv-header">
        <h2 className="cv-name">John Doe</h2>
        <h3 className="cv-title">Job Title</h3>
        <p className="cv-contact">
          <span>john.doe@email.com</span> | <span>+44 1234 567890</span> |{" "}
          <span>London, UK</span>
        </p>
      </div>

      {/* Summary */}
      <div className="cv-section">
        <h3>Professional Summary</h3>
        <p>Your professional summary goes here.</p>
      </div>

      {/* Skills */}
      <div className="cv-section">
        <h3>Skills</h3>
        <div className="cv-skills">Communication, Hard-working, Confident</div>
      </div>

      {/* Experience */}
      <div className="cv-section">
        <h3>Experience</h3>
        <div className="cv-job">
          <div className="cv-job-header">
            <div className="cv-job-title">Web Developer</div>
            <div className="cv-job-dates">Jan 2023 – Present</div>
          </div>
          <div className="cv-job-company">Journey of Results Ltd</div>
          <ul>
            <li>
              Built and maintained responsive web apps with React and Next.js.
            </li>
            <li>
              Worked closely with designers to improve UX and accessibility.
            </li>
            <li>Optimized performance, reducing load times by 40%.</li>
          </ul>
        </div>
      </div>

      {/* Education */}
      <div className="cv-section">
        <h3>Education</h3>
        <div className="cv-edu">
          <div className="cv-edu-header">
            <div className="cv-edu-title">BSc Computer Science</div>
            <div className="cv-edu-dates">2020 – 2023</div>
          </div>
          <div className="cv-edu-institution">University of Westminster</div>
        </div>
      </div>
    </div>
  );
}

export default DefaultCv;
export { CvTemplateOne };
