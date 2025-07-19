export function Footer() {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="py-6 border-t border-white/10">
        <div className="container mx-auto text-center text-white/60">
          <p>&copy; {currentYear} IMCESFA. All Rights Reserved.</p>
          <p className="mt-2 text-sm">Developed with ❤️ by The Development Team</p>
        </div>
      </footer>
    );
  }
  