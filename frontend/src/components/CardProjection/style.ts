import styles from 'styled-components';

const Container = styles.div`
  margin: auto;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 #ECECEC;
  background: var(--shape);
  max-width: 967px;
  margin: auto;
  align-content: center;
  color: white;

  .quotation_projection {
    color: var(--text_title);
    font-weight: 700;
    font-size: 0.9rem;
    width: 95%;
    margin: auto;
    margin-top: 73px;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    margin: auto;
      div {
        justify-content: space-around;
        width: 30%;
        min-width: 30%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        margin-top: 2.6rem;

        span {
          margin-left: 10px;
          color: var(--text_price);
          display: block;

          &:first-child {
            font-size: 0.9rem;
            color: var(--text_title);
            font-weight: 700;
            margin-bottom: 8px
          }

          &:nth-child(2) {
            font-size: 1.3rem;
            font-weight: 700;
            
          }
  
        }

      }

    }
`

const Table = styles.table`
  width: 95%;
  margin: auto;
  border-spacing: 0 0.5rem;

  margin-top: 1rem;

  th {
    color: var(--text_price);
    font-weight: 700;
    line-height: 1.5rem;
    border-bottom: 1px solid #C4C4C4;
    padding: 1rem;
  }

  td {
    color: var(--text_price);
    font-weight: 400;
    line-height: 1.5rem;
    padding: 0.8rem;
    padding-left: 30px;
    border-bottom: 1px solid #C4C4C4;
  }

`

export { Container, Table }