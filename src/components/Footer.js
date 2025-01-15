import { Link } from "react-router-dom";
export const Footer = () => {
  var currentTime = new Date();
  return (
    <>
      <footer className="bg-white  shadow m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            <Link href="/" className="hover:underline mr-10">
              © {currentTime.getFullYear()} Movie-Mate by Evans Tarise
            </Link>
            All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a
                href="https://evans-tarise-portfolio-website.netlify.app"
                target="_blank"
                rel="noreferrer"
                className="hover:underline me-4 md:me-6"
              >
                My Website
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/evans-tarise"
                target="_blank"
                rel="noreferrer"
                className="hover:underline me-4 md:me-6"
              >
                LinkendIn
              </a>
            </li>

            <li>
              <a
                href="https://github.com/etarise"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};
