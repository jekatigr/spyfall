import React, { useRef, useEffect } from 'react';

export default function useEventListener(eventName, handler, element = window): void {
    const savedHandler = useRef<Function>();

    useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);

    useEffect((): React.EffectCallback => {
        const isSupported = element && element.addEventListener;
        if (!isSupported) return undefined;

        const eventListener = (event): void => {
            if (savedHandler && savedHandler.current) {
                return savedHandler.current(event);
            }
            return undefined;
        };

        element.addEventListener(eventName, eventListener);

        return (): void => {
            element.removeEventListener(eventName, eventListener);
        };
    }, [eventName, element]);
}
