import { useLoaderData } from "remix";
import { getProfileInfo } from "~/backend/profile";
import type { Profile } from "~/backend/profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faGithub, faDev, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";


const iconsBrands = {
  facebook: faFacebook,
  twitter: faTwitter,
  github: faGithub,
  dev: faDev,
  linkedin: faLinkedin,
  instagram: faInstagram
}

export const loader = () => {
  return getProfileInfo();
};

const imageStyles = {
  backgroundImage: "url('/images/profile-image.jpg')"
};

export default function profile() {
  const meta = useLoaderData<Profile>();

  return (
    <div className="profile-base">
      {/* <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover" style={backgroundImage}></div> */}
      <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto py-32 my-0 lg:py-0">
        <div
          id="profile"
          className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
        >
          <div className="p-4 md:p-12 text-center lg:text-left">
            <div
              className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
              style={imageStyles}
            ></div>
            <h1 className="text-3xl font-bold pt-8 lg:pt-0">{meta.name}</h1>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-blue-500 opacity-25"></div>
            <p className="pt-4 uppercase text-base font-bold flex items-center justify-center lg:justify-start">
              <svg
                className="h-4 fill-current text-blue-700 pr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
              </svg>{" "}
              {meta.employment}
            </p>
            <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
              <svg
                className="h-4 fill-current text-blue-700 pr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
              </svg>{" "}
              {meta.location}
            </p>
            <p className="pt-8 text-sm">{meta.description}</p>

            <div className="pt-12 pb-8">
              <a href={meta.contactLink} target="_blank" className="profile-button">
                Get In Touch
              </a>
              {meta.cvLink ? (
              <a href={meta.cvLink} download className="profile-button-secondary ml-3">
                <FontAwesomeIcon icon={faDownload} className="mr-2" />
                Get My CV
              </a>
              ) : null}
            </div>

            <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-around">
              {meta.links.map((link) => (
                <a
                  className="link"
                  href={link.url}
                  target="_blank"
                >
                  {/*
                    // @ts-ignore */}
                  <FontAwesomeIcon icon={iconsBrands[link.name]} size="xl" className="fill-current text-gray-600 hover:text-blue-700" />
                </a>  
              ))}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/5">
          <img
            src="/images/profile-image.jpg"
            className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
          />
        </div>
        {/* <div className="absolute top-0 right-0 h-12 w-18 p-4">
          <button className="js-change-theme focus:outline-none">🌙</button>
        </div> */}
      </div>
    </div>
  );
}
