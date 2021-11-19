const matchesMediaQuery = (query: string) => {
    if ('window' in globalThis) {
        return Boolean(window.matchMedia(query).matches);
    }
    return false;
};

const matchesDarkTheme = () => true;
const matchesLightTheme = () => false;

const isColorSchemeSupported = matchesDarkTheme() || matchesLightTheme();

export function isSystemDarkModeEnabled() {
    if (!isColorSchemeSupported) {
        return false;
    }
    return matchesDarkTheme();
}
