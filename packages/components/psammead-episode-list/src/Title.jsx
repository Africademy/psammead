import styled from '@emotion/styled';
import { C_EBON } from '@bbc/psammead-styles/colours';
import { getPica } from '@bbc/gel-foundations/typography';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';

const Title = styled.span`
  ${({ script }) => getPica(script)};
  ${({ service }) => getSansRegular(service)}
  color: ${C_EBON};
  display: block;
  font-weight: 700;
`;

export default Title;
