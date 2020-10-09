import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 2rem auto;
  padding: 0 3rem;
  
  
  padding: 1rem 2rem;

`;
export const Listing = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 2rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  header {
      font-size: 2rem;
      font-weight: bold;
      margin: 1rem 0;
  }

  .count-room {

  }
`
