import styled from '@emotion/styled';
import { string, oneOf, shape } from 'prop-types';
import { getBodyCopy } from '@bbc/gel-foundations/typography';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';
import { C_SHADOW } from '@bbc/psammead-styles/colours';
import { GEL_SPACING_DBL } from '@bbc/gel-foundations/spacings';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';

const BulletedList = styled.ul`
  ${({ script }) => script && getBodyCopy(script)};
  ${({ service }) => getSansRegular(service)};
  margin-top: 0;
  list-style-type: none;

  & > li {
    position: relative;
  }

  & > li::before {
    top: 0.5rem;
    content: ' ';
    position: absolute;
    border-width: 1rem;
    border: 0.1875rem solid ${C_SHADOW};
    background-color: ${C_SHADOW};
    border-radius: 50%;
    ${({ dir }) => (dir === 'rtl' ? 'right: -1rem;' : 'left: -1rem;')}
  }
`;

BulletedList.propTypes = {
  script: shape(scriptPropType).isRequired,
  dir: oneOf(['ltr', 'rtl']),
  service: string.isRequired,
};

BulletedList.defaultProps = {
  dir: 'ltr',
  role: 'list',
};

export const BulletedListItem = styled.li`
  margin-bottom: ${GEL_SPACING_DBL};
`;

BulletedListItem.defaultProps = {
  role: 'listitem',
};

export default BulletedList;
