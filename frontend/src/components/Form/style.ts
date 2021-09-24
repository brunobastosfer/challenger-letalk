import styles from 'styled-components'

export const Container =  styles.form`
  display: flex;
  flex-direction: column;

  button {
    background: var(--button);
    width: 94%;
    height: 3rem;
    border: none;
    border-radius: 6px;
    font-weigth: 700;
    color: white;
    letter-spacing: 3px;
    font-size: 1rem;
    margin: auto;
    margin-bottom: 2.5rem;
  }

  input {
    width: 94%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: var(--shape);
    font-weight: 400;
    font-size: 1rem;
    margin: auto;

    &:first-child{
      margin-top: 70px;
    }

    &::placeholder {
      color: var(--text_body);
    }

    & + input {
      margin-top: 1rem;
    }
    
    & + button {
      margin-top: 2rem;
    }
  }  
`

export const CardContainer = styles.div`
  background: var(--shape);
  border-radius: 5px;
  box-shadow: 0 0 10px 0 #ECECEC;
  max-width: 967px;
  margin: auto;
  align-content: center;
`