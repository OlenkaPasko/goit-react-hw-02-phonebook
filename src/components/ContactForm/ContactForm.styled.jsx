import styled from 'styled-components';
import { Form as FormikForm, Field } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const FieldFormik = styled(Field)`
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px,
    rgb(0 0 0 / 12%) 0px 1px 8px 0px;
  :hover,
  :focus {
    color: blue;
  }
`;


export const Button = styled.button`
  background-color: blue;

  width: 100px;
  height: 20px;
  cursor: pointer;
`;
