import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
          Site developper avec vite React tailwind and typescript.
          </p>
          <p>© 2023 ,All RIGHT RESERVED. </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Liens</h4>
          <p className="my-5"><a href="https://www.linkedin.com/in/danny-grangeot-11bb51229/">LinkedIn</a> </p>
          <p className="my-5"><a href="https://danny-grangeot.fr/">Site Portofolio</a> </p>
         
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact</h4>
          <p className="my-5">danny-nicolas.grangeot@hotmail.com</p>
          <p>06 41 08 66 31</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
