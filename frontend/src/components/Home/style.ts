import styles from 'styled-components';

export const Container = styles.div`
  background: var(--background);

  h1 {
    color: var(--text_title);
    text-align: center;
    margin: 2rem 0 3rem 0;
  }

  p {
    margin-bottom: 1rem;
    text-align: center;
    font-weight: 700;

    &.second-container {
      margin: 5rem 0 1rem 0;
    }
  }
`