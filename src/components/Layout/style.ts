import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  height: 100vh;

  grid-template-columns: 70px 240px auto 240px;
  grid-template-rows: 46px auto 52px;
  grid-template-areas:
    'SL SN CI CI'
    'SL CL CD UL'
    'SL UI CD UL';
`;
