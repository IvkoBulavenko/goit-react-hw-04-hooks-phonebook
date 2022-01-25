import styled from "@emotion/styled/macro";

export const Find = styled.div`
  
    box-sizing: content-box;
    padding: 3px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    margin-bottom: 20px;
    max-width: 500px;

    input {
    padding: 10px 5px;
    box-sizing: content-box;
    border-radius: 4px;
    border: 1px solid;
    border-color: #69c2be;
    display: block;
    width: 150px;
    &:focus {
      box-shadow: 0 0 2pt 1pt #69c2be;
      outline: none;
    }
    &::placeholder {
      color: #999;
    }
  }
  
  }
`;
