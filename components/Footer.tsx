export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} Joseph Elsayyid</p>
        <div className="footer-links">
          <a href="mailto:elsayyidjoseph@gmail.com">Email</a>
          <a href="https://github.com/jelsayyid" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
