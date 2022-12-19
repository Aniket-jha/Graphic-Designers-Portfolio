const Footer = () => {
  return (
    <footer className="footer">
      <div className="copy">
        <p>E: kadamchaitrali95@gmail.com</p>
        <p>T: +91 8652261973</p>
      </div>
      <div className="soc-box">
        <div className="follow-label">Follow Me</div>
        <div className="soc">
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/">
            <span className="icon fab fa-instagram" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.behance.net/kadamchait8c32">
            <span className="icon fab fa-behance" />
          </a>
        </div>
      </div>
      <div className="clear" />
    </footer>
  );
};
export default Footer;
