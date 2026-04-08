export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="page-section py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <p className="font-mono text-[10px] text-text-muted tracking-wider">
          &copy; {new Date().getFullYear()} Joseph Elsayyid
        </p>
        <a
          href="mailto:elsayyidj@gmail.com"
          className="font-mono text-[10px] text-text-muted tracking-wider hover:text-text-secondary transition-colors duration-300"
        >
          elsayyidj@gmail.com
        </a>
      </div>
    </footer>
  );
}
