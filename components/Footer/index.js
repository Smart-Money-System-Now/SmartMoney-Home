import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">Contacto.</h1>
          <div className="mt-10">
            <img
              className=""
              src={`/images/LOGO.png`}
            ></img>
            <h2 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              BLOCKCHAIN
            </h2>
            <h2 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              WEB 3.0
            </h2>
            {/* <Link href="https://wa.link/r3cefl">
            </Link> */}
              <Button type="primary" onClick={() => window.open('https://wa.link/r3cefl')}>Agendar Cita</Button>
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Made With ❤ by{""}
        <Link href="https://smartlab.com.co">
          <a className="underline underline-offset-1">SMARTLAB</a>
        </Link>
      </h1>
    </>
  );
};

export default Footer;
