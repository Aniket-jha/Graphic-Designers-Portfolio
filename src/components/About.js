import { urlFor } from "../../utils/client";


const About = ({personalInfo}) => {
  return (
    <div className="section about" id="next_section">
      <div className="content content-box">
        {/* image */}
        <div className="image">
          <img src={urlFor(personalInfo.profileImage.asset)} alt="" />
        </div>
        {/* desc */}
        <div className="desc">
          <p>
            Hello! I’m Chaitrali Kadam. I am fun to be around but also very focused at 
               the same time. Currently Working As a Senior Graphic designer in Dubai
            <br/><br/>
            Aspiring to grow in the field of Advertising, Marketing, & Branding.
Having 4 years of experience in Designing with Various projects which includes Branding, Merchandise, TVC'S,  & Social Media numerous brands which include E- Commerce, Fintech, Hair Care, Food, Fashion, FMCG, News.
          </p>
          <div className="info-list">
            <ul>
              <li>
                <strong>Age:</strong> 28
              </li>
              <li>
                <strong>Residence:</strong> Dubai
              </li>
              
              <li>
                <strong>Address:</strong>Ewan Residences, Dubai Investment Park
Residence Dubai
              </li>
              <li>
                <strong>Phone:</strong> {personalInfo.contactNumber}
              </li>
              <li>
                <strong>E-mail:</strong>{personalInfo.email}
              </li>
            </ul>
          </div>
          <div className="bts">
            <a href={personalInfo.resume.asset.url} target="_blank" rel="noreferrer"  download className="btn hover-animated">
              <span className="circle" />
              <span className="lnk">Download CV</span>
            </a>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default About;
