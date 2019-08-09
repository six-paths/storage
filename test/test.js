var assert = require('chai').assert,
    Storage = require('../lib/index').default;

describe('Load', function()
{
    it('should start with undefined storage', function()
    {
        reset();

        let storage = Storage.load();
        assert.isUndefined(storage);
    });
});

describe('Save', function()
{
    it('should save to storage and be reloadable', function()
    {
        reset();

        assert.isUndefined(Storage.load());
        Storage.save({});
        assert.deepEqual(Storage.load(), {});
        Storage.save({'property': true});
        assert.isTrue(Storage.load('property'));
    });
});

function reset()
{
    Storage.save(undefined);
}

if (typeof window === 'undefined' ||
    typeof window.localStorage === 'undefined') {
    global.localStorage = {
        data: {},
        getItem(key) {
            return this.data[key] || null;
        },
        setItem(key, value) {
            this.data[key] = value;
        },
    };
}
