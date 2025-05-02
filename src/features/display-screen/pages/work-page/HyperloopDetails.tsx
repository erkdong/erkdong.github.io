import clsx from "clsx";
import CompanyTextElement from "./CompanyTextElement";

const HyperloopDetails = () => {
  const paragraphSpacing = " mt-3 ";
  return (
    <div className={clsx("")}>
      {/* Hyperloop */}
      <CompanyTextElement text="Hyperloop One" className="text-4xl" />
      <CompanyTextElement
        text="Software Engineer, Full Time 2017 - 2019"
        className="text-md mt-1"
      />

      {/* Offboard Software */}
      <CompanyTextElement text="Offboard Software" className="text-2xl mt-4" />
      <CompanyTextElement
        text="I built and maintained web apps that supported the development of the Hyperloop system."
        className="text-md mt-4"
      />
      <ul className={clsx("ml-8", paragraphSpacing, "list-disc")}>
        <li>
          <CompanyTextElement
            text="A real-time visualization tool for Hyperloop simulations, rendering pod movement on a geographic map based on live simulation data."
            className="text-md"
          />
        </li>
        <li>
          <CompanyTextElement
            text="A planning tool for internal engineers to design the structural and mechanical components of a Hyperloop system, integrating with a Python-based scientific backend developed by a teammate."
            className="text-md"
          />
        </li>
      </ul>
    </div>
  );
};

export default HyperloopDetails;
