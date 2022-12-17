import styled from 'styled-components';

export const Contacts = styled.ul`
  list-style: none;
  padding: 20px;
  width: 300px;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-radius: 5px;
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const ContactDetails = styled.span`
  margin-right: 5px;
`;

export const ContactButton = styled.button`
  width: 70px;
  height: 25px;
  background-color: rgba(120, 116, 118, 0.8);
  border: 1px solid transparent;
  border-radius: 5px;
  &:hover,
  &:focus {
    color: #fff;
    border-color: #fff;
  }
`;
