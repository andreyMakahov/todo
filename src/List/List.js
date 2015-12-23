import Data from '../Data/Data.js';

class List {

    constructor(list) {
        this.list = list || [];
    }

    add(item) {
        this.list.push(item);
        this.save();
    }

    remove(id) {
        this.list = this.list.filter((todo) => {
            return todo.id !== id;
        })
    }

    getById(id) {
        for(let todo of this.list) {
            if(todo.id === id) {
                return todo;
            }
        }
    }

    change(id, data) {
        for(let item of this.list) {
            if(item.id === id) {
                Object.assign(item, data);
            }
        }
    }

    save() {
        if(this.list.length) {
            Data.setItem('list', JSON.stringify(this.list));
        }
    }
}

export default List;