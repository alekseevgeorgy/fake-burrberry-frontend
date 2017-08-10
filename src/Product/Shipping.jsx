import React from "react";
import styled from "styled-components";
import triangle from "../img/triangle-up.svg";

const Picture = styled.img`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    width: 100%;
  }
`;

const Button = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  background-color: #fff;
  width: 100%;
`;

const WrapperButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem .5rem;

  @media screen and (min-width: 768px) {
    border-top: 0;
    padding: 0;
  }
`;

const Heading = styled.h2`
  margin: 0;
  font-family: Raleway, sans-serif;
  font-size: 1rem;
  line-height: 1.1875rem;
  font-weight: 500;
  color: #171717;
`;

const Triangle = styled.img`
  transform: rotate(180deg);

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const WrapperText = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    padding-top: 1rem;
  }
`;

const TextBold = styled.p`
  margin: 0;
  font-family: Raleway, sans-serif;
  font-size: 0.75rem;
  line-height: 0.875rem;
  font-weight: 700;
`;

const Text = TextBold.extend`
  margin-top: 0.25rem;
  margin-bottom: 1.5rem;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 400;
`;

export default () =>
  <div className="row">
    <div className="col-md-7">
      <Picture
        src={process.env.PUBLIC_URL + "img/shipping.png"}
        alt={"shipping-photo"}
      />
    </div>
    <div className="col-xs-12 col-md-5">
      <Button>
        <WrapperButton>
          <Heading>SHIPPING &amp; RETURNS</Heading>
          <Triangle src={triangle} />
        </WrapperButton>
      </Button>
      <WrapperText>
        <TextBold>Free Next Day Delivery</TextBold>
        <Text>
          Order before 7pm Monday to Thursday for delivery the next day
        </Text>
        <TextBold>Collect-in-Store</TextBold>
        <Text>
          Order online today and pick up your items in store as early as
          tomorrow
        </Text>
        <TextBold>Free Returns</TextBold>
        <Text>Enjoy free returns on your order</Text>
        <TextBold>Free Gift Packaging</TextBold>
        <Text>
          Discover our gift packaging, a gold lined box tied with a coloured
          ribbon
        </Text>
      </WrapperText>
    </div>
  </div>;