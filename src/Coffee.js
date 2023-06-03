import React from 'react';
import styled from 'styled-components';

const Button = styled.a`
  line-height: 1.5;
  height: 40px;
  width: 230px;
  text-decoration: none;
  display: inline-flex;
  color: #FFFFFF;
  background-color: #FF813F;
  border-radius: 3px;
  border: 1px solid transparent;
  padding: 0.1rem 0.16rem 0.1rem 0.16rem;
  font-size: 0.24rem;
  letter-spacing: 0.3px;
  box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5);
  transition: 0.3s all linear;
  font-family: cursive;

  &:hover, &:active, &:focus {
    text-decoration: none;
    box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5);
    opacity: 0.85;
    color: #FFFFFF;
  }
`;


const Image = styled.img`
  height: 34px;
  width: 35px;
  margin-bottom: 1px;
  box-shadow: none;
  border: none;
  vertical-align: middle;
`;

const Text = styled.span`
  margin-left: 10px;
  font-size: 1rem;
  vertical-align: middle;
  display: flex;
  align-items: center;
  font-family: 'Poppins';
`;

function Coffee() {
  return (
    <Button target="_blank" href="https://www.buymeacoffee.com/hayatokatagiri">
      <Image src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a coffee" />
      <Text>作者にコーヒーをおごる</Text>
    </Button>
  );
}

export default Coffee;

