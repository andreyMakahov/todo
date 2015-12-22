class Data {
    static getItem(key) {
        return localStorage.getItem(key);
    }
    static setItem(key, value) {
        localStorage.setItem(key, value);
    }
    static deleteItem(key) {
        localStorage.removeItem(key);
    }
}

export default Data;