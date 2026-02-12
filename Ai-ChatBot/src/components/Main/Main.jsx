import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import "./Main.css";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  } = useContext(Context);

  return (
    <div className="flex-1 min-h-[100vh] pb-[15vh] relative">
      <nav className="flex items-center justify-between text-[22px] p-[20px] text-[#585858]">
        <p className="">Ai-ChatBot</p>
        <img className="w-10 rounded-full" src={assets.user_icon} alt="" />
      </nav>
      <div className="max-w-[900px] m-auto">
        {!showResult ? (
          <>
            <div className=" text-[56px] text-[#c4c7c5] font-extrabold p-[20px] ">
              <p>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fea6de] to-[#5094fac7]">
                  Hello, Dev.
                </span>
              </p>
              <p>How can I help you today.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 px-5">
              <div className="h-[200px] p-4 bg-[#f0f4f9] rounded-lg cursor-pointer relative hover:bg-[#dfe4ea] hover:scale-105 transform transition-transform duration-300">
                <p className="color-[#585858] text-[17px]">
                  Sample text about writing, design, or placeholder content.
                </p>
                <img
                  className="p-1 absolute bg-white w-[35px] rounded-full bottom-3 right-3 "
                  src={assets.compass_icon}
                  alt=""
                />
              </div>
              <div className="h-[200px] p-4 bg-[#f0f4f9] rounded-lg cursor-pointer relative hover:bg-[#dfe4ea] hover:scale-105 transform transition-transform duration-300">
                <p className="color-[#585858] text-[17px]">
                  {" "}
                  Continuation of placeholder text.
                </p>
                <img
                  className="p-1 absolute bg-white w-[35px] rounded-full bottom-3 right-3 "
                  src={assets.bulb_icon}
                  alt=""
                />
              </div>
              <div className="h-[200px] p-4 bg-[#f0f4f9] rounded-lg cursor-pointer relative hover:bg-[#dfe4ea] hover:scale-105 transform transition-transform duration-300">
                <p className="color-[#585858] text-[17px]">
                   Another placeholder sentence. 
                </p>
                <img
                  className="p-1 absolute bg-white w-[35px] rounded-full bottom-3 right-3 "
                  src={assets.message_icon}
                  alt=""
                />
              </div>
              <div className="h-[200px] p-4 bg-[#f0f4f9] rounded-lg cursor-pointer relative hover:bg-[#dfe4ea] hover:scale-105 transform transition-transform duration-300">
                <p className="color-[#585858] text-[17px]">
                  {" "}
                  Sample placeholder text with an extra word.
                </p>
                <img
                  className="p-1 absolute bg-white w-[35px] rounded-full bottom-3 right-3 "
                  src={assets.code_icon}
                  alt=""
                />
              </div>
            </div>
          </>
        ) : (
          <div className="result py-0 px-[5%] max-h-[70vh] overflow-y-scroll ">
            <div className="result-title my-[40px] flex items-center gap-5 ">
              <img
                className="w-12 rounded-full"
                src={assets.user_icon}
                alt=""
              />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data flex gap-3 items-start">
              <img className="w-12" src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="w-full fles flex-col gap-5 loader">
                  Wait responce is comming
                  <hr className="rounded-5 border-none bg-[#f6f7f8] h-[20px] bg-[length:800px_50px] hr" />
                  <hr className="rounded-5 border-none bg-[#f6f7f8] h-[20px] bg-[length:800px_50px] hr" />
                  <hr className="rounded-5 border-none bg-[#f6f7f8] h-[20px] bg-[length:800px_50px] hr" />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="fixed w-full max-w-[900px] bottom-0 px-3 m-auto bg-[#f6f7f8] sm:bg-transparent">
          <div className="flex items-center justify-between gap-3 px-5 py-2 bg-[#f0f4f9] rounded-full ">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onSent();
                }
              }}
              className="flex-1  bg-transparent border-none p-1 text-[18px] outline-none "
              type="text"
              placeholder="Enter promt here ..."
            />
            <div className="flex gap-3 items-center">
              <img
                className="w-[24px] cursor-pointer "
                src={assets.gallery_icon}
                alt=""
              />
              <img
                className="w-[24px] cursor-pointer "
                src={assets.mic_icon}
                alt=""
              />
              <img
                onClick={() => onSent()}
                className="w-[24px] cursor-pointer hover:scale-105 transform transition-transform duration-300"
                src={assets.send_icon}
                alt=""
              />
            </div>
          </div>
          <p className="text-[13px] my-5 mx-auto text-center ">
            Gemini may display incorrect info, include about people, so doble
            check it..
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
