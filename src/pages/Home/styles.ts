import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    width: 100%;
    max-width: 44rem;
    padding: 3rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3.5rem;
  }
`

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: clamp(2rem, 13vw, 10rem);
  line-height: 0.8;
  color: ${(props) => props.theme['gray-100']};
  display: flex;
  gap: clamp(0.25rem, 1.5vw, 1rem);

  span {
    background: ${(props) => props.theme['gray-700']};
    padding: clamp(1rem, 3vw, 2rem) clamp(0.25rem, 1.5vw, 1rem);
    border-radius: 8px;
  }
`

export const Separator = styled.div`
  padding: clamp(1rem, 3vw, 2rem) 0;
  color: ${(props) => props.theme['green-500']};
  width: clamp(0.75rem, 5vw, 4rem);
  overflow: hidden;
  display: flex;
  justify-content: center;
`

export const StartCountdownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-700']};
  }

  &:disabled {
    background: ${(props) => props.theme['gray-600']};
    color: ${(props) => props.theme['gray-300']};
    cursor: not-allowed;
  }
`
const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  font-weight: bold;
  font-size: 1.25rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  text-align: center;

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  min-width: 0;
  flex: 1;
  @media (max-width: 600px) {
    flex-basis: 100%;
  }
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`
