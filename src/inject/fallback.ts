if (
    document.documentElement instanceof HTMLHtmlElement &&
    !document.querySelector('.darkreader--fallback')
) {
    // https://github.com/darkreader/darkreader/issues/3618#issuecomment-895477598
    const css = 'html, body, body :not(iframe):not(div[style^="position:absolute;top:0;left:-"]) { background-color: #181a1b !important; border-color: #776e62 !important; color: #e8e6e3 !important; } html, body { opacity: 1 !important; transition: none !important; }';
    const fallback = document.createElement('style');
    fallback.classList.add('darkreader');
    fallback.classList.add('darkreader--fallback');
    fallback.media = 'screen';
    fallback.textContent = css;

    if (document.head) {
        document.head.append(fallback);
    } else {
        const root = document.documentElement;
        root.append(fallback);
        const observer = new MutationObserver(() => {
            if (document.head) {
                observer.disconnect();
                if (fallback.isConnected) {
                    document.head.append(fallback);
                }
            }
        });
        observer.observe(root, {childList: true});
    }
}
