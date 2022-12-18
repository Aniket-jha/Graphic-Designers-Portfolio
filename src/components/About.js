const About = () => {
  return (
    <div className="section about" id="next_section">
      <div className="content content-box">
        {/* image */}
        <div className="image">
          <img src="images/man_r.jpg" alt="" />
        </div>
        {/* desc */}
        <div className="desc">
          <p>
            Hello! I’m Chaitrali Kadam. I am fun to be around but also very focused at 
               the same time. Currently working as a Senior 
            Designer and leading a team of 5.
            <br/>
            Aspiring to grow in the field of Branding, Advertising and Marketing. Have 3 years of experience 
in designing with Branding projects and Social 
Media posts for numerous brands which include 
e-commerce, fintech, hair care, food, etcetera.
          </p>
          <div className="info-list">
            <ul>
              <li>
                <strong>Age:</strong> 27
              </li>
              <li>
                <strong>Residence:</strong> India
              </li>
              
              <li>
                <strong>Address:</strong> Mumbai
              </li>
              <li>
                <strong>Phone:</strong> +1 256 254 84 56
              </li>
              <li>
                <strong>E-mail:</strong> alejandroa@gmail.com
              </li>
            </ul>
          </div>
          <div className="bts">
            <a href="#" className="btn hover-animated">
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
