import {css, DefaultTheme, ThemedCssFunction} from 'styled-components';

export const devices: { [x: string]: number } = {
    desktopLg: 1280,
    desktopMd: 1200,
    desktop: 1024,
    tabletLg: 992,
    tablet: 768,
    phoneLg: 568,
    phoneMd: 480,
    phoneSm: 360,
    phoneXs: 320
};

interface IMedia {
    desktopLg: typeof css;
    desktopMd: typeof css;
    desktop: typeof css;
    tabletLg: typeof css;
    tablet: typeof css;
    phoneLg: typeof css;
    phoneMd: typeof css;
    phoneSm: typeof css;
    phoneXs: typeof css;
    untilDesktopLg: typeof css;
    untilDesktopMd: typeof css;
    untilDesktop: typeof css;
    untilTabletLg: typeof css;
    untilTablet: typeof css;
    untilPhoneLg: typeof css;
    untilPhoneMd: typeof css;
    untilPhoneSm: typeof css;
    untilPhoneXs: typeof css;
    fromDesktopLg: typeof css;
    fromDesktopMd: typeof css;
    fromDesktop: typeof css;
    fromTabletLg: typeof css;
    fromTablet: typeof css;
    fromPhoneLg: typeof css;
    fromPhoneMd: typeof css;
    fromPhoneSm: typeof css;
    fromPhoneXs: typeof css;
}

// @ts-ignore
export const Media: IMedia = Object.keys(devices).reduce((acc: { [l: string]: ThemedCssFunction<DefaultTheme> }, label) => {
    // @ts-ignore
    acc[label] = (...args: any) => css`@media (max-width: ${devices[label] - 1}px) {${css(...args)}}`;

    const fromLabel = `from${label.substr(0, 1).toUpperCase()}${label.substr(1)}`;
    // @ts-ignore
    acc[fromLabel] = (...args: any) => css`@media (min-width: ${devices[label] / 16}em) {${css(...args)}}`;

    const untilLabel = `until${label.substr(0, 1).toUpperCase()}${label.substr(1)}`;
    // @ts-ignore
    acc[untilLabel] = (...args: any) => css`@media (max-width: ${devices[label] - 1}px) {${css(...args)}}`;

    return acc;
}, {});
