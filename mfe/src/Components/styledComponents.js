import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const CustomButton = styled.button`
  padding:10px;
  margin-right:20px;
  font-size:15px;
  color:${(props) => (props.outline ? "#0070c1" : "#ffffff")};
  border-radius:4px;
  border:2px solid #0070c1;
  background-color: ${(props) => (props.outline ? "#ffffff" : "#0070c1")};
  cursor: pointer;
`;
export const Spacer = styled.div`
  height:10px;
`;

export const CustomInput = styled.input`
  line-height:10px;
  width:80%;
  padding:5px;
  margin:5px;
  border:1px solid #0070c1;
  border-radius:4px;
`;

export const CustomTextArea = styled.textarea`
  line-height:20px;
  width:80%;
  padding:5px;
  margin:5px;
  border:1px solid #0070c1;
  border-radius:4px;
`;

export const GlobalStyle = createGlobalStyle`
    body{
      margin:0;
    }
    
    .textArea{
      width:100%;
      padding:10px;
      font-size:15px;
      text-align:center;
    }
    /* Add more global styles here if needed */
    
`;
