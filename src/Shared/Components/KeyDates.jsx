import React from "react";

export default function KeyDates() {
  return (
    <>
      <div className="bg-[url('/image/papersubmit.jpg')] h-[400px] relative">
        <div className="hanu-bold text-[48px] flex justify-center items-center h-full text-white relative">
          <h1>Important Dates</h1>
        </div>
      </div>
      <section className="max-w-full mx-[150px]">
        <div className="grid grid-cols-2 lg:py-10 gap-8">
          <div className="space-y-5 lg:space-y-10">
            <h2 className="hanu-bold text-[30px] text-[#093FB4]">Important Dates & Bank Details</h2>
            <p className=" pop-medium text-[16px]">
              Stay informed and plan ahead with the important dates and
              registration information for the <span className="text-[#093FB4]">International Conference on
              Software Systems Development and Data Analysis.</span>  Ensure you don’t
              miss key deadlines for abstract submission, paper acceptance, and
              early registration to make the most of this premier opportunity to
              connect, present, and grow in the field of Software Systems
              Development and Data Analysis early registration to make the most
              of this premier opportunity to connect.
            </p>
          </div>
          <div>
            <img src="/image/keydates.png" alt="Loading" />
          </div>
        </div>
      </section>

      <section className="max-w-full mx-[150px]">
        <div className="space-y-5 lg:py-10">
          <h2 className="hanu-bold text-[30px] text-center text-[#093FB4]">Key Dates Timeline</h2>
          <p className="pop-medium text=[22px] text-center">Mark your calendar for these important milestones</p>
          <div>
            <div className=" lg:bg-[url('/image/key.jpg')] relative">
            <div className="grid grid-cols-2 gap-10">
              <h3 className="hanu-bold text-[30px] relative">Abstract Submission Deadline:</h3>
              <h3 className="hanu-bold text-[30px] text-white relative">June 10, 2025</h3>
            </div>
              
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
}
