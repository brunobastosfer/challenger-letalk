import styles from 'styled-components';

const Container = styles.div`
  margin: auto;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 #ECECEC;
  max-width: 967px;
  margin: auto;
  align-content: center;
  color: white;

  div {
    display: flex;
    flex-wrap: wrap;
    // margin: 0 auto;
      div {
        border: 1px solid white;
        display: flex;
        flex-direction: column;
        span {
          color: var(--text_price);
          display: block;
  
          &:first-child {
            color: var(--text_title);
            font-weight: 700;
          }
  
        }

      }

    }



    }
  // background: var(--shape);
  // &:first-child {

  // }

  // div {
  //   border: 1px solid black;
  //   span {
  //     color: var(--text_price);
  //     // color: white;
  //     &:first-child {
  //       color: var(--text_title);
  //       font-weight: 700;
  //     }

    // }
  }
`

export { Container }