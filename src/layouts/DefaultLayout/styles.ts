import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  min-height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;
  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    margin: 1rem;
    padding: 1.25rem;
    min-height: calc(100svh - 2rem);
  }
`
