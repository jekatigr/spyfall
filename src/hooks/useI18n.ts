import { useCallback, useContext } from 'react';
import { storeContext } from 'store';

type useI18nType = <T = never>(translateKey: string | (string | number)[], templateData?: T) => string;

const useI18n = (): useI18nType => {
    const {
        state: { language },
        i18n,
    } = useContext(storeContext);

    return useCallback(<T>(translateKey: string, templateData?: T) => i18n.t(translateKey, templateData, language), [
        language,
    ]);
};

export default useI18n;
