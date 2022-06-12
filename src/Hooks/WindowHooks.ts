import React from 'react';

export const useWindowSize = () => {
    const [size, setSize] = React.useState({
        width: 0,
        height: 0,
    });
    React.useLayoutEffect(() => {
        const updateSize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
};

export const useLocalStorageLite = (
    key: string,
    parser: (x: string) => any = s => s,
    stringifier: (x: any) => string = s => s,
) => {
    // pull the initial value from local storage if it is already set
    const [state, setState] = React.useState(() => {
        const exValue = localStorage.getItem(key);
        if (exValue) {
            return parser(exValue);
        }
        return null;
    });

    // save the new value when it changes
    React.useEffect(() => {
        localStorage.setItem(key, stringifier(state));
    }, [state]);

    // memoize a storage watcher callback back because everything in hooks should be memoized
    const storageWatcher = React.useCallback(
        (e: StorageEvent) => {
            if (e.newValue) {
                // update ours
                setState((currState: any) => {
                    const newDat = parser(e.newValue || 'null');
                    return newDat === state ? newDat : currState;
                });
            }
        },
        [state]
    );

    // install the watcher
    React.useEffect(() => {
        window.addEventListener('storage', storageWatcher);
        // stop listening on remove
        return () => {
            window.removeEventListener('storage', storageWatcher);
        };
    }, [state]);

    return {state, setState};
};

export const stopScroll = (opened: boolean) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useEffect(() => {
        const body = document.getElementsByTagName('body')[0];
        if (!body) {
            return;
        }
        body.style.overflowY = opened ? 'hidden' : 'auto';
        body.style.overflowX = opened ? 'hidden' : 'auto';

        // eslint-disable-next-line consistent-return
        return () => {
            body.style.overflowY = 'auto';
            body.style.overflowX = 'auto';
        };
    }, [opened]);
};

