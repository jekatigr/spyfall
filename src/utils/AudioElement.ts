class AudioElement {
    src: string;

    audio: HTMLAudioElement | undefined;

    initialized: boolean;

    initializationListeners: Map<string, () => void>;

    constructor(src: string) {
        this.src = src;
        this.initialized = false;
        this.initializationListeners = new Map();
    }

    addInitializationListener = (id: string, callback: () => void): void => {
        this.initializationListeners.set(id, callback);
    };

    removeInitializationListener = (id: string): void => {
        this.initializationListeners.delete(id);
    };

    initialize = (): void => {
        if (!this.initialized) {
            this.audio = new Audio(this.src);
            this.audio.play().then(() => {
                this.audio.pause();
                this.audio.currentTime = 0;
                this.initialized = true;
                this.initializationListeners.forEach(f => f());
            });
        }
    };

    play = (): void => {
        if (this.initialized) {
            this.audio.play();
        }
    };
}

export default AudioElement;
