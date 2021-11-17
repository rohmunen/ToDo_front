import React, {useState} from 'react'
import {ToggleButton, ToggleButtonGroup} from 'react-bootstrap'
import {observer} from "mobx-react-lite";
import NewTodoList from '../components/TodoList'
const Todos = observer(() => {
    const [value, setValue] = useState(['none']);
    const handleChange = (val) => {
        setValue(val)
    }
    return(
        <div className="todo_content">
            <div className="sort_list">
            <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
                <ToggleButton id="tbg-btn-1" value='favourite'>
                    favourite
                </ToggleButton>
                <ToggleButton id="tbg-btn-2" value='done' disabled={value.includes('not done') ? true : false}>
                    done
                </ToggleButton>
                <ToggleButton id="tbg-btn-3" value='not done' disabled={value.includes('done') ? true : false}>
                    not done
                </ToggleButton>
            </ToggleButtonGroup>
            </div>
            <div className="todo_rows">
                <NewTodoList sort = {value} />
            </div>
        </div>
        )
    })

export default Todos

