import styled from 'styled-components';

const ListButton = styled.div`
  button {
    background-color: #e6f0fb;
    width: 100%;
    height: 54px;
    border-top: 1px solid #aed4fb;
    color: #007eff;
    font-weight: 500;
    text-transform: uppercase;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    svg {
      vertical-align: initial;
    }
    &:hover {
      box-shadow: none;
    }
    &:focus {
      outline: 0;
    }
  }
`;

export default ListButton;