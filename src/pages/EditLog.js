import LogEditForm from "../components/LogEditForm"

import { useParams } from "react-router-dom";

const EditLog = () => {
    let { index } = useParams();

    return (
        <div className="New Edit">
            <h2>Edit Log</h2>
            <LogEditForm index={index} />
        </div>
    )
}

export default EditLog;

