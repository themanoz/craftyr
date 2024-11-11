import React from "react";

export default function Footer() {
  return (
    <>
      <div className="pt-6 px-64">
        <hr />
      </div>
      <div className="flex justify-around pb-8 pt-4 text-slate-500 font-base">
        <p>craftyr, all rights reserved.</p>
        <ul className="flex gap-5">
          <li>privacy policy</li>
          <li>terms of service</li>
        </ul>
      </div>
    </>
  );
}
