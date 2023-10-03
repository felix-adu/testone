import React from "react";

export const About = () => {
  return (
    <>
      <div id="about" className="flex justify-evenly items-center pl-[150px]">
          <div id="image" className="h-full">
            <img src={"/front-view.png"} alt="img"></img>
          </div>

        <div className="pr-[150px] pl-[50px] pt-[50px]">
          <h1 className="text-6xl text-red-700">Hello World!</h1>
          <p className="text-lg text-cyan-900">
            These are some of the CSS properties you can use to style video
            elements in your web pages. Keep in mind that video elements also
            have their own set of attributes and JavaScript methods that can be
            used to control their playback and behavior, in addition to CSS
            styling. is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </>
  );
};
