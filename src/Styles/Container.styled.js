import styled from '@emotion/styled/macro';

export const Container = styled.div`
  box-sizing: border-box;
  padding: 20px 30px;
  background-color: #c1d9d8;
  max-width: 320px;
  margin: 0 auto;
  @media (min-width: 768px) {
    max-width: 600px;
  }
  @media (min-width: 1024px) {
    max-width: 1000px;
  }
  p {
    text-align: center;
    color: #353b3a;
    font-weight: 500;
  }
`;

export const Contactscss = styled.h2`
  text-align: center;
  color: #353b3a;
  margin-bottom: 10px;
  font-weight: 900;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  @media (min-width: 768px) {
    margin-bottom: 20px;
  }
  @media (min-width: 1024px) {
    margin-bottom: 30px;
  }
`;
