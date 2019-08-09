import get from 'lodash/get';

const Storage = {
    load: (key = null, defaultValue = undefined) => {
        try {
            const serializedState = localStorage.getItem('state');
            if ([null, undefined].indexOf(serializedState) !== -1) {
                return defaultValue;
            }

            const parsedState = JSON.parse(serializedState);

            if (key) {
                return get(parsedState, key, defaultValue);
            }

            return parsedState;
        } catch (error) {
            return undefined;
        }
    },

    save: (state) => {
        try {
            const serializedState = JSON.stringify(state);
            localStorage.setItem('state', serializedState);
        } catch (error) {
            // Ignore errors for now.
        }
    }
};

export default Storage;
