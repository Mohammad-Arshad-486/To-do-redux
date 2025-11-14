import { useDispatch } from "react-redux"
import FormTemplate from "./FormTemplate"
import { addTask } from "./FormTemplate"
import { addData } from "../store/to-do/addSlice"
function Create() {
  const dispatch = useDispatch()
  return (
    <div className='mt-15'>
        <FormTemplate  fields={addTask.fields}
    buttonLabel={addTask.buttonLabel}
    onSubmit={(data) => dispatch(addData(data))}/>
    </div>
  )
}

export default Create