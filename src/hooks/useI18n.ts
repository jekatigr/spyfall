import { useCallback, useContext } from 'react';
import { storeContext } from 'store';

type useI18nType = (translateKey: string | (string | number)[]) => string;

const useI18n = (): useI18nType => {
    const {
        state: { language },
        i18n,
    } = useContext(storeContext);

    return useCallback((translateKey: string) => i18n.t(translateKey, {}, language), [language]);
};

export default useI18n;
