export default function TodoForm (props) {
    return (
        <div>
            <input
                className=".todo-item"
                value = {props.TodoItem}
                onChange = {prop.changeHandler}
                type="text"
            />

            <button onCLick={addItem}>Add Item</button>

        </div>
    );
}