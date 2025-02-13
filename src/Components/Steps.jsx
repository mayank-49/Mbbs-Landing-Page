import React from "react";
import { Step } from "./content";
import {
  CheckCircle2,
} from "lucide-react";

const Steps = () => {
  return (
    <section id="steps" className="md:p-10 flex flex-col justify-between p-5 w-full h-full bg-center bg-gray-100">
      <div className="flex justify-center w-full ">
        <h1 className="text-md font-semibold text-slate-400">Steps</h1>
      </div>
      <div className="flex w-full justify-center py-5">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-green-500 ">Admission Process</h1>
      </div>
      <div className="grid lg:grid-cols-3  gap-5 lg:gap-25 w-full py-10">
        {Step.map((item,index)=>{
            return(
                <div className="flex lg:flex-col w-full gap-0 lg:justify-center justify-start items-center py-2">
                    <div className="flex gap-2 justify-center items-center w-1/3 lg:w-full">
                        <CheckCircle2 className="w-10 h-10 text-green-500"/>
                        <h1 className="text-xl md:text-2xl font-bold">Step {index+1}</h1>
                    </div>
                    <div className="flex justify-center items-center">
                        <h1 className="text-xl text-slate-600 font-semibold">{item}</h1>
                    </div>
                </div>
            )
        })}
      </div>
    </section>
  );
};

export default Steps;
