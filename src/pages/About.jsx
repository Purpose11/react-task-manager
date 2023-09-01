const About = () => {
  return (
    <div className=" mt-[20px] lg:mt-[60px] p-3 lg:p-4 lg:w-[80%] w-full lg:mx-auto mx-0">
      <h2 className="text-center font-bold lg:text-2xl text-[18px]">
        Your All-in-One Task Solution
      </h2>
      <p className="text-center text-gray-500 lg:text-sm text-[12px]">
        Streamline Your Productivity and Stay Organized
      </p>
      <p className="mt-[20px] font-semibold text-gray-500 lg:text-base text-sm">
        Stay Organized:{""}
        <span className="text-black font-normal lg:text-sm text-[13px] ml-[5px]">
          With our intuitive interface, you can effortlessly create, edit, and
          prioritize tasks. Whether it&apos;s for work, personal projects, or
          important deadlines, our app helps you stay organized and on top of
          your responsibilities.
        </span>
      </p>
      <p className="mt-[20px] font-semibold text-gray-500 lg:text-base text-sm">
        Visualize Progress:
        <span className="text-black font-normal lg:text-sm text-[13px] ml-[5px]">
          Monitor your accomplishments and track progress over time. Our app
          provides visual insights into completed tasks, helping you reflect on
          your achievements and set new targets.
        </span>
      </p>
      <p className="text-gray-400 text-[10px] mt-[30px]">
        &copy; 2023 purposefulCoder. All rights reserved.
      </p>
    </div>
  );
};

export default About;
