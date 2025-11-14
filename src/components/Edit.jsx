import FormTemplate from "./FormTemplate"
import { editTask } from "./FormTemplate"
import { useDispatch } from "react-redux";
import { editData } from "../store/to-do/editSlice";
import { fetchData } from "../store/to-do/fetchSlice";

function Edit() {
  const dispatch = useDispatch();

  return (
    <div className="mt-20">
        <FormTemplate fields={editTask.fields}
    buttonLabel={editTask.buttonLabel}
    onSubmit={(id, data) => dispatch(editData({ id, updatedData: data })).then(() => dispatch(fetchData()))}/>
    </div>
  )
}

export default Edit