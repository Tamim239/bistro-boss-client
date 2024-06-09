import { SectionTitle } from "../../../Components/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckOutForm } from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_API_KEY);

export const Payment = () => {
  return (
    <div>
      <SectionTitle
        heading={"payment"}
        subHeading={"Please Payment"}
      ></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>
          <CheckOutForm />
        </Elements>
      </div>
    </div>
  );
};
