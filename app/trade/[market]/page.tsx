import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex flex-row flex-1">
      <div className="flex flex-col flex-1">
        <p>Market Bar</p>
        <div className="flex flex-row h-[620px] border-y border-slate-800">
          <div className="flex flex-col flex-1">
            <p>Charts</p>
          </div>
          <div className="w-[1px] flex-col border-slate-800 border-l"></div>
          <div className="flex flex-col w-[250px] overflow-hidden">
            <p>Depth</p>
          </div>
        </div>
      </div>
      <div className="w-[1px] flex-col border-slate-800 border-l"></div>
      <div>
        <div className="flex flex-col w-[250px]">
          <p>Swap</p>
        </div>
      </div>
    </div>
  );
};

export default page;
