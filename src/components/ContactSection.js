import { Fragment } from "react";
const ContactSection = () => {
  return (
    <Fragment>
      {/* Section Contacts Info */}
      <div className="section contacts" id="next_section">
        <div className="content">
          {/* title */}
          <div className="title">
            <div className="title_inner">Contacts Info</div>
          </div>
          {/* contacts items */}
          <div className="service-items">
            <div className="service-col">
              <div className="service-item content-box">
                <div className="icon">
                  <span className="fas fa-phone" />
                </div>
                <div className="name">Phone</div>
                <div className="text">+971 52 212 6658</div>
              </div>
            </div>
            <div className="service-col">
              <div className="service-item content-box">
                <div className="icon">
                  <span className="fas fa-envelope" />
                </div>
                <div className="name">Email</div>
                <div className="text">
                  <a href="mailto:kadamchaitrali95@gmail.com">
                    kadamchaitrali95@gmail.com
                  </a>
                </div>
              </div>
            </div>
            
          
          </div>
          <div className="clear" />
        </div>
      </div>
      {/* Section Contacts Form */}
      
    </Fragment>
  );
};
export default ContactSection;
