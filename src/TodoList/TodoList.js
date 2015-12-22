import List from '../List/List.js';
import TodoItem from '../TodoItem/TodoItem.js';

class TodoList extends List {

    constructor(list) {
        super(list);

        this.$todoEl = document.getElementsByClassName('js-todo-list')[0];
        this.$finishedEl = document.getElementsByClassName('js-finished-list')[0];

        this.initGlobalEvents();
    }

    render() {
        let [todoFragment, finishedFragment] = this.filterItems();

        this.$finishedEl.innerHTML = finishedFragment;
        this.$todoEl.innerHTML = todoFragment;

        this.initTodoEvents();
    }

    filterItems() {
        var todoFragment = '', finishedFragment = '';

        this.list.forEach(item => {
            if(item.done) {
                finishedFragment += TodoItem.toHtml(item);
            } else {
                todoFragment += TodoItem.toHtml(item);
            }
        });

        return [todoFragment, finishedFragment];
    }

    initGlobalEvents() {
        let panelEl = document.querySelector('.js-todo-drop-panel');

        var _this = this;

        panelEl.addEventListener("drop", event => {
            var id = parseInt(event.dataTransfer.getData("Text"), 10);
            _this.change(id, {
                done: true
            });
            _this.save();
            _this.render();
        });

        panelEl.addEventListener("dragover", function(event) {
            event.preventDefault();
        });
    }

    initTodoEvents() {
        var todoItems = document.querySelectorAll('.list-group-item');
        Array.prototype.forEach.call(todoItems, function(elem) {
            elem.addEventListener('dragstart', function(event) {
                event.dataTransfer.setData("text", event.target.getAttribute('data-id'));
            }, false);
        });
    }

}

export default TodoList;