import {isMatchMediaChangeEventListenerSupported} from '../../utils/platform';

export function watchForColorSchemeChange(callback: ({isDark}: {isDark: boolean}) => void) {
    const query = matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => callback({isDark: true });
    if (isMatchMediaChangeEventListenerSupported) {
        query.addEventListener('change', onChange);
    } else {
        query.addListener(onChange);
    }
    return {
        disconnect() {
            if (isMatchMediaChangeEventListenerSupported) {
                query.removeEventListener('change', onChange);
            } else {
                query.removeListener(onChange);
            }
        },
    };
}
