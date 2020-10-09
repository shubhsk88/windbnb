import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  color: black;
  flex-basis: 30%;
  overflow: hidden;

  .image {
    width: 100%;
    border-radius: 24px;
    margin-bottom: 1rem;
    height: 20rem;
  }
`;

export const Description = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: baseline;
  margin-bottom: 0.8rem;
`;

export const SuperHost = styled.div`
  padding: 0.5rem;
  font-size: 0.8rem;
  text-transform: uppercase;
  border: 1px solid #4f4f4f;
  border-radius: 24px;
  font-weight: bold;
`;

export const Rating = styled.div`
  span {
    margin-left: 3px;
  }
`;
