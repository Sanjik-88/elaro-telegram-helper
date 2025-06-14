
const PageFooter = () => {
  return (
    <footer className="py-8 border-t border-primary-purple/20 bg-white">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-text-dark/80">
          © {new Date().getFullYear()} Flexberry
        </p>
        <div className="flex gap-4">
          <a href="#" className="text-sm text-text-dark/80 hover:text-primary-purple">
            Поддержка
          </a>
          <a href="#" className="text-sm text-text-dark/80 hover:text-primary-purple">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;
