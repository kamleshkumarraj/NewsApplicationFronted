import React from "react";

const News = React.forwardRef(({ newsData, descriptionTag }, ref) => {
  const date = new Date(newsData? newsData?.createdAt: '')
  const updateDate = (date.toString().replace('GMT+0530 (India Standard Time)' , ''))
  return (
    <div ref={ref} className="flex flex-col bg-white gap-y-5">
      <div id="detials" className="flex justify-between px-[2rem] py-[1rem]">
        <div id="left" className="flex flex-col gap-[1rem]">
          <h1 className="text-[2.4rem] font-bold text-gray-700">
          <a href="" className="text-[blue] underline">Bangladesh</a>
            {
              // newsData?.category
              
            }
          </h1>
          <h2 className="text-[1.6rem]">{newsData?.title}</h2>
          <h3 className="text-[1.4rem]">{newsData?.writerName}</h3>
        </div>
        <div id="right" className="self-end">
          <p className="text-[1.5rem]">Updated : {updateDate}</p>
        </div>
      </div>
      <img src={newsData?.image} alt="" />
      <div className="flex flex-col px-[2.4rem] pb-6 gap-y-4">
        <h3 className="text-[2rem] font-medium text-red-700 uppercase">
          {newsData?.category}
        </h3>
        <h2 className="text-[1.8rem] font-bold text-gray-700">
          {newsData?.title}
        </h2>
        <div className="flex text-[1.6rem] font-normal gap-x-2 text-slate-600">
          <span>{newsData?.date}</span>
          <span>{newsData?.writerName}</span>
        </div>
        <p ref={descriptionTag} className="text-[1.4rem]">
          {newsData?.description}
        </p>
      </div>
    </div>
  );
});

News.displayName = "News";
export default News;
