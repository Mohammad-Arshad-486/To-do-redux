import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchData } from "../store/to-do/fetchSlice";
import { deleteData } from "../store/to-do/deleteSlice";
import { current } from "../store/to-do/currentSlice";
import { useEffect } from "react";

function Data() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchData());
    console.log("Run");
  }, [dispatch]);
  return (
    <div>
      <table className="mx-auto border min-w-150">
        <thead className="border">
          <tr>
            <th colSpan="3" className="border px-3 py-2">
              Tasks
            </th>
          </tr>
          <tr>
            <th className="border px-3 py-2">Id</th>
            <th className="border px-3 py-2">Name</th>
            <th className="border px-3 py-2">Action</th>
          </tr>
        </thead>
        <tbody className="border">
          {(state.fetch.data || []).length > 0 ? (
            state.fetch.data.map((item) => (
              <tr key={item.id}>
                <td className="border px-3 py-2">{item.id}</td>
                <td className="border px-3 py-2">{item.name}</td>
                <td className="border px-3 py-2">
<button onClick={() => dispatch(current({ id: item.id, name: item.name }))}>
                    <Link to="/edit">Edit</Link>
                  </button>
                  <button
                    className="ml-3"
                    onClick={() => {
                      dispatch(deleteData(item.id)).then(() => dispatch(fetchData()));
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : state.fetch.isLoading ? (
            <tr>
              <td colSpan="4" className="border border-gray-300 p-2 text-gray-500">
                Loading...
              </td>
            </tr>
          ) : (
            <tr>
              <td colSpan="4" className="border border-gray-300 p-2 text-gray-500">
                No data found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Data;
