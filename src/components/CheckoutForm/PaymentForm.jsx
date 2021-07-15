import React from "react";
import { Typography, Button, Divider } from "@material-ui/core";
import { Element, CardElement, ElementConsumer } from "@stripe/react-stripe-js";
import { loadStrip } from "@stripe/stripe-js";
import Review from "./Review";

const PaymentForm = ({ checkoutToken }) => {
  return (
    <>
      <Review checkoutToken={checkoutToken} />
    </>
  );
};

export default PaymentForm;
