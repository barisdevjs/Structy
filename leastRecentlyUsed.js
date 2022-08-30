class LRU {
    constructor(max = 10) {
        this.max = max;
        this.cache = new Map();
    }

    get(key) {
        let item = this.cache.get(key);
        if (item) {
            // refresh key
            this.cache.delete(key);
            this.cache.set(key, item);
        }
        return item;
    }

    set(key, val) {
        // refresh key
        if (this.cache.has(key)) this.cache.delete(key);
        // evict oldest
        else if (this.cache.size == this.max) this.cache.delete(this.first());
        this.cache.set(key, val);
    }

    values(cache) {
        return this.cache.values(cache);
    }

    entries(cache) {
        return this.cache.entries(cache);
    }

    keys(cache) {
        return this.cache.keys(cache);
    }

    first() {
        return this.cache.keys().next().value;
    }

    increment() {
        return this.max++
    }

    reset(cache) {
        return this.cache.clear(cache)
    }
}

const person = new LRU(3)
person.set('name', 'Barış')
person.set('age', 32)
person.set('company', 'Dekorister')
person.increment()
person.set('hobbies','fishing')

console.log(person)
