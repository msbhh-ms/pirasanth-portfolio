import React from "react";
import TextAutomation from "./TextAutomation";
import AnimatedText from "react-animated-text-content";
const AnimatedHeroText = () => {
  return (
    <div className="md:translate-x-96 p-3 w-full">
      <div className=" ">
        <div className="">
          <div className="">
            <div className="text-primary block text-[40px] md:text-[68px] lg:text-[70px] xl:text-[70px]">
              <AnimatedText
                type="words" // animate words or chars
                animation={{
                  x: "200px",
                  y: "-20px",
                  scale: 1.1,
                  ease: "ease-in-out",
                }}
                animationType="float"
                interval={0.06}
                duration={0.8}
                tag="p"
                includeWhiteSpaces
                threshold={0.1}
                rootMargin="20%"
              >
                Hi!
              </AnimatedText>
            </div>
          </div>
          <p className="text-[20px] md:text-[28px] lg:text-[32px] pt-6 lg:pt-14 text-white">
            I'm <span className="text-primary">Pirasanth</span> - but call me
            <span className="text-primary">
              PJ<span className="text-white">.</span>
            </span>
          </p>
        </div>
        <div className="">
          <span className="text-[20px] md:text-[28px] lg:text-[32px] pt-3 lg:pt-8 text-white block ">
            <div>
              <div>
                <AnimatedText
                  type="words" // animate words or chars
                  animation={{
                    x: "200px",
                    y: "-20px",
                    scale: 1.1,
                    ease: "ease-in-out",
                  }}
                  animationType="float"
                  interval={0.1}
                  duration={0.8}
                  tag="p"
                  className="animated-paragraph md:text-[29px] text-[19px]"
                  includeWhiteSpaces
                  threshold={0.3}
                  rootMargin="10%"
                >
                  {`I’m a frontend developer and`}
                </AnimatedText>
                <AnimatedText
                  type="words" // animate words or chars
                  animation={{
                    x: "200px",
                    y: "-20px",
                    scale: 1.1,
                    ease: "ease-in-out",
                  }}
                  animationType="float"
                  interval={0.1}
                  duration={0.8}
                  tag="p"
                  className="animated-paragraph md:text-[29px] text-[19px]"
                  includeWhiteSpaces
                  threshold={0.3}
                  rootMargin="10%"
                >
                  {`automation QA living in London.`}
                </AnimatedText>
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AnimatedHeroText;
