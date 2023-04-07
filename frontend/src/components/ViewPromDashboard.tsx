import { Button } from "@mui/material";

type Props = {

}

const ViewPromDashboard = ({}: Props) => {

    return (
        <div className="load-wrapper">
            <Button variant="contained" color="warning">View Prometheus Dashboard</Button>
        </div>
    )
}

export default ViewPromDashboard;