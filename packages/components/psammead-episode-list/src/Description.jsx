import styled from '@emotion/styled';
import { getLongPrimer } from '@bbc/gel-foundations/typography';
import { C_EBON } from '@bbc/psammead-styles/colours';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';
import { GEL_SPACING_HLF } from '@bbc/gel-foundations/spacings';

const Description = styled.span`
  ${({ script }) => getLongPrimer(script)};
  ${({ service }) => getSansRegular(service)}
  color: ${C_EBON};
  display: block;
  margin: ${GEL_SPACING_HLF} 0;
`;

export default Description;
