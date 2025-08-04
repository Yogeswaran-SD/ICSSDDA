import React from "react";

export default function Organizing() {
  return (
    <>
      <div className="bg-[url('/image/papersubmit.jpg')] h-[400px] relative">
        <div className="hanu-bold text-[48px] flex justify-center items-center h-full text-white relative">
          <h1>Organizing Committee</h1>
        </div>
      </div>

      <section className="max-w-full mx-[150px]">
        <div className="lg:py-10 space-y-5">
          <div className="hanu-bold text[30px] text-[#093FB4] text-[30px]">
            <h2>Organizing Committee</h2>
          </div>
          <div className="pop-medium text[16px]">
            <p>
              The Organizing Committee of the International Conference on
              Software Systems Development and Data Analysis consists of
              distinguished academicians, researchers, and industry experts
              committed to excellence in conference planning and execution. The
              committee plays a vital role in curating technical sessions,
              managing the peer-review process, and coordinating with speakers,
              authors, and participants. Their collective efforts ensure the
              delivery of a high-quality, impactful event that fosters
              innovation, collaboration, and knowledge exchange across the
              fields of Software System Development and data analytics.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-full mx-[150px]">
        <div className="space-y-5 lg:py-10">
          <div className="hanu-bold text[30px] text-[#093FB4] text-[30px]">
            <h2>It’s Rules and Responsiblities</h2>
          </div>
          <div className="grid grid-cols-2 gap-8 ">
            <div>
              <ul className="list-disc text-[16px] pop-medium space-y-2">
                <li>Planning and coordinating all aspects of the conference logistics and execution.</li>
                <li>Curating technical sessions, panel discussions, and keynote presentations led by leading experts.</li>
                <li>Managing the paper submission, peer-review, and acceptance process with academic integrity.</li>
                <li>Facilitating effective communication with authors, reviewers, speakers, and sponsoring partners.</li>
                <li>Ensuring the dissemination of conference proceedings through recognized publication channels.</li>
                <li>Promoting the conference globally and encouraging participation from diverse academic and professional communities.</li>
              </ul>
            </div>
            <div>
              <img src="/image/image 23.png" alt="Loading" />
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}
