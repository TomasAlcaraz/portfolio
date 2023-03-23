import theme from "./theme";
import { css } from 'styled-components';

const styles = {
  boxShadow: css`
  box-shadow: 0 10px 30px -15px ${theme.colors.shadowNavy};
  transition: ${theme.transition};

  &:hover,
  &:focus {
    box-shadow: 0 20px 30px -15px ${theme.colors.lightGreen};
  }
`,
}

export default styles;
