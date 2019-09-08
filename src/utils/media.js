import { css } from "styled-components"

export const sizes = {
  fourK: 3840,
  fullHd: 1920,
  tabletSamsung: 1600,
  ipadPro: 1388,
  bigDesktop: 1280,
  giant: 1200,
  mediumDesktop: 1117,
  laptop: 1024,
  desktop: 992,
  miniDesktop: 945,
  tablet: 899,
  mediumTablet: 770,
  miniTablet: 666,
  phone: 599,
  miniPhone: 432,
}

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})
