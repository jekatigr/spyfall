import { useCallback, useContext, useEffect, useState } from 'react';
import { storeContext } from 'store';

export type useNotificationType = {
    initialize: () => void;
    initialized: boolean;
    play: () => void;
};

const useNotification = (componentName: string): useNotificationType => {
    const { notification } = useContext(storeContext);
    const [initialized, setInitialized] = useState(notification.initialized);

    const handleInitialization = useCallback(() => {
        setInitialized(true);
    }, [setInitialized]);

    useEffect(() => {
        notification.addInitializationListener(componentName, handleInitialization);

        return (): void => {
            notification.removeInitializationListener(componentName);
        };
    }, [notification, handleInitialization]);

    return {
        initialized,
        initialize: notification.initialize,
        play: notification.play,
    };
};

export default useNotification;
