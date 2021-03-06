import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import Preferences from './Preferences';
import Help from './Help';

const Footer = styled.footer`
  padding: 2rem 0;
  margin-top: 4rem;
  background-color: #f3f3f3;

  @media screen and (min-width: 48rem) {
    margin-top: 0;
    padding-left: 0;
    padding-right: 0;
  }

  @media screen and (min-width: 62rem) {
    padding: 4rem 0 3rem;
  }
`;

export default () =>
  (<Footer>
    <div className="container">
      <Navigation />
      <Preferences />
      <Help />
    </div>
  </Footer>);
