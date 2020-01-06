/// <reference types="next" />
/// <reference types="next/types/global" />

declare interface Window {
    localStorage: {
        savedState: any;
    };
}

declare module '*.svg?sprite' {
    const content: any;
    export default content;
}
