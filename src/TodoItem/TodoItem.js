class TodoItem {

    static get DRAGGABLE() {
        return true;
    }

    constructor(title) {

        this.id = Date.now();
        this.done = false;
        this.title = title;
    }

    toObject() {
        return {
            id: this.id,
            title: this.title,
            done: this.done
        }
    }

    static toHtml(item) {
        return '<li data-id="' + item.id + '" class="list-group-item" draggable="'+ TodoItem.DRAGGABLE +'">' + item.title + '</li>';
    }
}

export default TodoItem;