import clsx from "clsx";
import CompanyTextElement from "./CompanyTextElement";
import { useSequentialDelay } from "@/app/hooks";

const HyperloopDetails = () => {
  const paragraphSpacing = " mt-3 ";
  const delays = useSequentialDelay();

  return (
    <div className={clsx("")}>
      {/* Hyperloop */}
      <CompanyTextElement text="Hyperloop One" className="text-2xl" />
      <CompanyTextElement
        text="Software Engineer, Full Time 2017 - 2019"
        className="text-md mt-1"
        delay={delays.next()}
      />

      {/* Offboard Software */}
      <CompanyTextElement
        text="Offboard Software"
        className="text-xl mt-4"
        delay={delays.next()}
      />
      <CompanyTextElement
        text="I built and maintained web apps that supported the development of the Hyperloop system."
        className="text-md mt-4"
        delay={delays.next()}
      />
      <ul className={clsx("ml-8", paragraphSpacing, "list-disc")}>
        <CompanyTextElement
          text="<li>A real-time visualization tool for Hyperloop simulations, rendering pod movement on a geographic map based on live simulation data.</li>"
          className="text-md"
          delay={delays.next()}
        />
        <CompanyTextElement
          text="<li>A planning tool for internal engineers to design the structural and mechanical components of a Hyperloop system, integrating with a Python-based scientific backend developed by a teammate.</li>"
          className="text-md"
          delay={delays.next()}
        />
      </ul>
    </div>
  );
};

export default HyperloopDetails;
