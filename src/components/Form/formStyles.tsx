import styled from "styled-components";

export const ParagraphSC = styled.p`
  color: #ff5d5d;
`;

export const InputMainSC = styled.input`
  border: none;
  outline: none;
  padding: 5px;
  color: white;
  background: transparent;
  border-bottom: 2px solid #4aa9da;
  margin-bottom: 0.6rem;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  -moz-appearance: textfield;
  appearance: textfield;

  &::placeholder {
    color: #fff9;
  }
`;

export const InputSC = styled.input`
  padding: 0.6em 1.6em;
  border: 2px solid #4aa9da;
  overflow: hidden;
  background-color: transparent;
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  transition: 0.5s;
  z-index: 1;
  font-family: inherit;
  color: #4aa9da;
  border-radius: 2px;

  &::before {
    content: "";
    width: 0;
    height: 300%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    background: #4aa9da;
    transition: 0.5s ease;
    display: block;
    z-index: -1;

    &:hover::before {
      width: 105%;
    }
  }

  &:hover {
    cursor: pointer;
    color: white;
  }
`;

export const DivSC = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 6rem;
  margin-right: 5rem;
  border-radius: 30px;
`;

export const ParagraphLinkSC = styled.p`
  position: absolute;
  color: #4aa9da;
  top: -12px;
  right: -5rem;
  border: 1.7px solid #4aa9da;
  padding: 0.6em 1.6em;
  border-radius: 2px;
  transition: filter 0.9s;
  margin-left: 2px;
  font-size: 12px;

  &:hover {
    color:#4aa9db;
    cursor: pointer;
    filter: brightness(0.9);
    background-color: #4aa9db;
  }
`;
