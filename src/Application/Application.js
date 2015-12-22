import TodoList from '../TodoList/TodoList.js';
import Data from '../Data/Data.js';
import TodoItem from '../TodoItem/TodoItem.js';

class Application {

    constructor() {
        let list = Data.getItem('list');
        list = typeof list === 'string' ? JSON.parse(list) : [];

        this.list = new TodoList(list);
    }

    run() {
        this.list.render();
        this.initEvents();

        return this;
    }

    initEvents() {
        var addTodoEl = document.getElementsByClassName('js-add-todo')[0];
        document.addEventListener('keypress', e => {

            if (e.ctrlKey || e.altKey || e.metaKey){
                return false;
            }

            if(event.keyCode === 13) {

                let title = addTodoEl.value;
                let todo = new TodoItem(title);
                this.list.add(todo.toObject());

                this.list.render();
                addTodoEl.value = '';
            }
        });

    }
}

export default Application;