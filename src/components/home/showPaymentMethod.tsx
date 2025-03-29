"use client"
import React, { useState } from 'react';
import MembershipForm from "../membership/membershipForm";

type Props = {};

function ShowPaymentMethod({}: Props) {
  const [isVisible, setIsVisible] = useState(false);
  
  const show = () => {
    setIsVisible(true);
  };

  return (
    <div>
      <div onClick={show}>
        Click to show membership form
      </div>
      {isVisible && <MembershipForm />}
    </div>
  );
}

export default ShowPaymentMethod;