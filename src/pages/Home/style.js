import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1600px;
  width: 100%;
  margin: 2rem auto;
  
  header {
    font-size: 5rem;
    margin: 4rem 0;
  }
`;
export const Listing = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
`;
