import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 5rem 3rem;
  flex-direction: column;
  padding: 1rem 0;
`;

export const Description = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const SuperHost = styled.div`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  border: 1px solid #4f4f4f;
  border-radius: 5px;
  font-weight: bold;
`;

export const Rating = styled.div`
  span {
    margin-left: 3px;
  }
`;
