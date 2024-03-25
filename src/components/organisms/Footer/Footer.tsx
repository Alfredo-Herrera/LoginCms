import { navbarData } from "../Navbar/navbarData";
import { footerData } from "./footerData";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-10 sm:py-10 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navbarData.map((item) => (
            <div key={item.title} className="pb-6">
              <a
                href={item.url}
                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
              >
                {item.title}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {footerData.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; 2020 Cuidado con el Perro, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
