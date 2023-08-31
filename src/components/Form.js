import Item from "./Item";
import {useState} from "react";
import { v4 as uuidv4 } from "uuid";

function Form(props) {

    const [dataArr, setDataArr] = useState([
        {txt: "Promener le chien", id: uuidv4()},
        {txt: "sport", id: uuidv4()},
        {txt: "coder avec react", id: uuidv4()},
    ]);

    const [stateInput, setInput] = useState();

    const deleteElement = id => {
        //console.log(id);
        const filteredState = dataArr.filter(item => {
            return item.id !== id;
        });

        setDataArr(filteredState);
    };

    const linkedInput = e => {
        setInput(e);
    };

    const addTodo = e => {
        e.preventDefault();
        const newArr = [...dataArr];

        const newTodo = {};
        newTodo.txt = stateInput;
        newTodo.id = uuidv4();

        if (stateInput) {
            newArr.push(newTodo);
            setDataArr(newArr);

            setInput("");
        }
    };

    return (
        <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
            <form onSubmit={e => addTodo(e)} className="mb-3">
                <label htmlFor="todo" className="form-label mt-3">Chose a faire</label>
                <input type="text" id="todo" className="form-control" value={stateInput} onInput={e => linkedInput(e.target.value)} />

                <button className="mt-2 btn btn-primary">Envoyer</button>
            </form>

            <h2>Liste des choses à faire : </h2>
            <ul className="list-group">
                {dataArr.map((item) => {
                    return (
                        <Item
                            txt={item.txt}
                            key={item.id}
                            id={item.id}
                            delFunc={deleteElement}
                        />
                    )
                })}
            </ul>
        </div>
    );
}

export default Form;