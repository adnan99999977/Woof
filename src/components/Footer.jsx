import { Link } from "react-router";
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className=" dark:bg-[#2a4247] w-full ">
 
      <div className="flex justify-center items-center py-5 lg:px-4">
        <img
          className="w-38 md:w-50 filter hue-rotate-180"
          src="/assets/lg.png"
          alt="logo"
        />
      </div>

      
      <div className="mx-auto w-full max-w-screen-xl  sm:px-6 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 py-6 lg:py-8 text-center sm:text-left">
          
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Company
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-3">
              <li><a className="hover:underline cursor-pointer">About</a></li>
              <li><a className="hover:underline cursor-pointer">Careers</a></li>
              <li><a className="hover:underline cursor-pointer">Brand Center</a></li>
              <li><a className="hover:underline cursor-pointer">Blog</a></li>
            </ul>
          </div>

          
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Help center
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-3">
              <li><a className="hover:underline cursor-pointer">Discord Server</a></li>
              <li><a className="hover:underline cursor-pointer">Twitter</a></li>
              <li><a className="hover:underline cursor-pointer">Facebook</a></li>
              <li><a className="hover:underline cursor-pointer">Contact Us</a></li>
            </ul>
          </div>
       
    
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Legal
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-3">
              <li><a className="hover:underline cursor-pointer">Privacy Policy</a></li>
              <li><a className="hover:underline cursor-pointer">Licensing</a></li>
              <li><a className="hover:underline cursor-pointer">Terms &amp; Conditions</a></li>
            </ul>
          </div>

       
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Download
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-3">
              <li><a className="hover:underline cursor-pointer">iOS</a></li>
              <li><a className="hover:underline cursor-pointer">Android</a></li>
              <li><a className="hover:underline cursor-pointer">Windows</a></li>
              <li><a className="hover:underline cursor-pointer">MacOS</a></li>
            </ul>
          </div>
        </div>

        <div className="px-4  py-6 bg-gray-100 dark:bg-[#a1a7e038] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-300 text-center sm:text-left">
            © {year} <a className="hover:underline cursor-pointer">Woof's™</a>. All Rights Reserved.
          </span>

          <div className="flex justify-center sm:justify-end space-x-5" aria-label="Social links">
            {/* Facebook */}
            <Link
              to={"https://www.facebook.com/naif.adnan.90"}
              target="blank"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              aria-label="Facebook"
            >
              <svg
                className="w-5 sm:w-6 h-5 sm:h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>

            {/* GitHub */}
            <Link
              to={"https://github.com/adnan99999977"}
              target="blank"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              aria-label="GitHub"
            >
              <svg
                className="w-5 sm:w-6 h-5 sm:h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
