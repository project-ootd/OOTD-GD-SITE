import React from "react";
import { WindowMockup } from "react-daisyui";
import BuybtnMan from "../btn/BuybtnMan";

const Payment = (args) => {
  return (
    <>
      <WindowMockup {...args}>
        <div className="flex justify-center px-4 py-16 w-96">Hello!</div>
      </WindowMockup>
    </>
  );
};

export default Payment;
