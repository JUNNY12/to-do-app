import { GreetingHeader, UsernameHeader } from "../../component/header/Headers";
import {StyledInput} from "../../component/form/Input";
import { AddButton } from "../../component/shared/Button";
import { Header1 } from "../../component/header/Headers"
import { Paragraph } from "../../component/paragrapgh/Paragraph"
import { ParentList, List } from "../../component/shared/List"
import FlexContainer from "../../component/shared/FlexContainer"
import { CheckedInput } from "../../component/form/Input"
import { Form } from "../../component/form/Form"
import {CgTrashEmpty} from "react-icons/cg"
import { IconWrapper } from "../../component/paragrapgh/Paragraph"
import {AiOutlinePlus} from "react-icons/ai"
import { TodoForm } from "../../component/form/Form";
import Greeting from "../utils/Greeting";
import Dexie from "dexie"
import { useLiveQuery } from "dexie-react-hooks"
import { useState } from "react"




const db = new Dexie("myTodoApp")
db.version(1).stores({
    todos:"++id, task, done"
})


const {todos } = db


const Todo = () => {


    const [taskData, setTaskData] = useState({
        taskField:""
    })

    const [checkedValue, setCheckedValue] = useState({
        done:false
    })

    // const handleChecked = (e) => {
    //     e.preventDefault()

    //     const{name,checked} = e.target

    //     setCheckedValue(prevValue => {
    //         return{
    //             ...prevValue,
    //             [name]:checked
    //         }
    //     })
    // }

    const handleChange = (e) => {
        e.preventDefault()

        const {name, value} = e.target

        setTaskData(prevData => {
            return{
                ...prevData,
                [name]:value
            }
        })
    }
 
    const Items = useLiveQuery(()=> todos.toArray(), [])

    const addTask = async (event) => {
        event.preventDefault()

        await todos.add({
            task:taskData.taskField,
            done:checkedValue.done
        })

        setTaskData({
            taskField:""
        })

    }

    const removeTask = async (id) => todos.delete(id)

    const toggleStatus = async (id, e)=> {
        await todos.update(id, {done:!!e.target.value})
         
    }


return (
    <div>
            <>
                <GreetingHeader>{Greeting()}</GreetingHeader>
            </>

            <>
                <TodoForm onSubmit={addTask}>
                        <StyledInput
                        placeholder={`Please Add Your Task`} 
                        name={`taskField`}
                        value={taskData.taskField}
                        onChange={handleChange}
                        required
                        />

                        <AddButton>
                            <AiOutlinePlus/>
                        </AddButton>
                </TodoForm>
            </>

            <>
                <div>
                    <Header1>
                        My Tasks
                    </Header1>

                    <Paragraph>
                       {!Items?.length &&  "Your List Is Empty, Add some Tasks!!!"}
                    </Paragraph>

                    <ParentList>
                        {Items?.map(({id, task , done}) =>
                        
                            <FlexContainer key={id} className={done?"completed" : null}>

                                    <Form>
                                        <CheckedInput 
                                        type={`checkbox`} 
                                        name='done'
                                        value={done}
                                        onChange={(e) => toggleStatus(id, e)}
                                        />
                                    </Form>
                    
                                    <List>{task}</List>
                    
                                    <IconWrapper>
                                        <CgTrashEmpty
                                        onClick={()=> removeTask(id)}
                                        />
                                    </IconWrapper>


                            </FlexContainer>
                        )}

                    </ParentList>


                </div>

            </>
    </div>
)
}

export default Todo