import React from "react";
import { Professional } from "../Constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experiance = () => {
  return (
    <section id="Experiance" className="p-6 h-full font-poppins">
      <h1 className=" text-white text-2xl font-semibold mb-8">
        Work Experiance
      </h1>
      <div className="my-4">
        <VerticalTimeline>
          {Professional.map((work, id) => (
            <VerticalTimelineElement
              contentStyle={{
                background: "rgb(51 65 85)",
                color: "#ffffff",
              }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(59 130 246)" }}
              iconStyle={{ background: "rgb(59 130 246)", color: "#fff" }}
              date={work.Date}
              lineColor={{ color: "rgb(59 130 246" }}
            >
              <h1
                key={id}
                className="text-blue-500 text-2xl font-sans font-semibold"
              >
                {work.DomainName}
              </h1>
              <h3 className="text-white text-xl font-lg font-sans font-semibold">
                {work.Location}
              </h3>
              <h3 className="text-lg text-white ">{work.JobType}</h3>
              <p className="text-slate-200 text-2xl">{work.Description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experiance;
