import React from 'react';
import styled, { css } from 'styled-components';
import { shape, string, node, bool, func, oneOf } from 'prop-types';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import { navigationIcons } from '@bbc/psammead-assets/svgs';
import {
  C_WHITE,
  C_POSTBOX,
  C_EBON,
  C_SHADOW,
} from '@bbc/psammead-styles/colours';
import {
  GEL_SPACING_HLF,
  GEL_SPACING,
  GEL_SPACING_DBL,
} from '@bbc/gel-foundations/spacings';
import { GEL_GROUP_3_SCREEN_WIDTH_MIN } from '@bbc/gel-foundations/breakpoints';
import { getPica } from '@bbc/gel-foundations/typography';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';

const MENU_ICON_SIDE_LENGTH = '2.75rem'; // 44px

const getStyles = dir => {
  const direction = dir === 'ltr' ? 'left' : 'right';
  return `border-${direction}: ${GEL_SPACING_HLF} solid ${C_WHITE};
          padding-${direction}: ${GEL_SPACING}`;
};

const DropdownWrapper = styled.div`
  background-color: ${C_EBON};

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    display: none;
  }
`;

const iconBorder = css`
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  height: ${MENU_ICON_SIDE_LENGTH};
  width: ${MENU_ICON_SIDE_LENGTH};
  border: ${GEL_SPACING_HLF} solid ${C_WHITE};
`;

const CrossButton = styled.button`
  background-color: ${C_EBON};
  width: ${MENU_ICON_SIDE_LENGTH};
  height: ${MENU_ICON_SIDE_LENGTH};
  padding: 0;
  margin: 0;
  border: 0;

  &:focus {
    box-shadow: inset 0 0 0 ${GEL_SPACING_HLF} ${C_WHITE};
    ::after {
      ${iconBorder};
    }
  }
`;

export const DropdownUl = styled.ul.attrs({ role: 'list' })`
  list-style-type: none;
  margin: 0;
  padding: 0 ${GEL_SPACING};
  border-bottom: 0.125rem solid ${C_SHADOW};
`;

const StyledDropdownLi = styled.li`
  padding: 0.75rem 0;
  border-bottom: 0.0625rem solid ${C_SHADOW};

  &:last-child {
    padding-bottom: ${GEL_SPACING_DBL};
    border: 0;
  }
`;

const StyledDropdownLink = styled.a`
  ${({ script }) => script && getPica(script)};
  ${({ service }) => service && getSansRegular(service)}
  color: ${C_WHITE};
  text-decoration: none;

  &:focus {
    text-decoration: underline;
  }
`;

const StyledCurrentLink = styled.span`
  ${({ dir }) => getStyles(dir)}
`;

export const DropdownLi = ({
  children,
  script,
  currentPageText,
  active,
  service,
  url,
  dir,
}) => (
  <StyledDropdownLi role="listitem">
    <StyledDropdownLink script={script} service={service} href={url}>
      {active && currentPageText ? (
        <StyledCurrentLink
          dir={dir}
          // eslint-disable-next-line jsx-a11y/aria-role
          role="text"
        >
          <VisuallyHiddenText>{currentPageText}</VisuallyHiddenText>
          {children}
        </StyledCurrentLink>
      ) : (
        children
      )}
    </StyledDropdownLink>
  </StyledDropdownLi>
);

DropdownLi.propTypes = {
  children: string.isRequired,
  url: string.isRequired,
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
  active: bool,
  currentPageText: string,
  dir: oneOf(['ltr', 'rtl']),
};

DropdownLi.defaultProps = {
  active: false,
  currentPageText: null,
  dir: 'ltr',
};

const dropdownProps = {
  announcedText: string.isRequired,
  children: node.isRequired,
};

export const CanonicalDropdown = ({ announcedText, onClose, children }) => (
  <DropdownWrapper>
    <CrossButton
      aria-label={announcedText}
      onClick={onClose}
      // eslint-disable-next-line react/jsx-boolean-value
      aria-expanded="true"
    >
      {navigationIcons.cross}
    </CrossButton>
    {children}
  </DropdownWrapper>
);

CanonicalDropdown.propTypes = {
  ...dropdownProps,
  onClose: func.isRequired,
};

export const AmpDropdown = ({ announcedText, onClose, children }) => (
  <DropdownWrapper>
    <CrossButton
      aria-label={announcedText}
      on={onClose}
      // eslint-disable-next-line react/jsx-boolean-value
      aria-expanded="true"
    >
      {navigationIcons.cross}
    </CrossButton>
    {children}
  </DropdownWrapper>
);

AmpDropdown.propTypes = {
  ...dropdownProps,
  onClose: string.isRequired,
};

const HamburgerButton = styled.button`
  width: ${MENU_ICON_SIDE_LENGTH};
  height: ${MENU_ICON_SIDE_LENGTH};
  background-color: ${C_POSTBOX};
  padding: 0;
  margin: 0;
  border: 0;

  &:focus {
    box-shadow: inset 0 0 0 ${GEL_SPACING_HLF} ${C_WHITE};
    ::after {
      ${iconBorder};
    }
  }

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    display: none;
  }
`;

const hamburgerProps = {
  announcedText: string.isRequired,
};

export const CanonicalHamburgerMenu = ({ announcedText, onOpen }) => (
  <HamburgerButton
    aria-label={announcedText}
    onClick={onOpen}
    aria-expanded="false"
  >
    {navigationIcons.hamburger}
  </HamburgerButton>
);

CanonicalHamburgerMenu.propTypes = {
  ...hamburgerProps,
  onOpen: func.isRequired,
};

export const AmpHamburgerMenu = ({ announcedText, onOpen }) => (
  <HamburgerButton aria-label={announcedText} on={onOpen} aria-expanded="false">
    {navigationIcons.hamburger}
  </HamburgerButton>
);

AmpHamburgerMenu.propTypes = {
  ...hamburgerProps,
  onOpen: string.isRequired,
};
