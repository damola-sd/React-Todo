// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import Todo from './Todo';


export default function TodoList ({items}) {
    return(
        items.map(item => {
            <Todo item={item}/>
        })
         
    )
}
