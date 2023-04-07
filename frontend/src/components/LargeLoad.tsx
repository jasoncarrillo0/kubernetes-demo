import { LoadingButton } from "@mui/lab";
import { Button } from "@mui/material";
import { useState } from "react";
import { initiateLargeLoad } from "../helpers";

type Props = {

}

const LargeLoad = ({}: Props) => {
    const [loading, setLoading] = useState(false);


    async function doTest() {
        setLoading(true);
        try {
            const message = await initiateLargeLoad();
            console.log(message);
        } catch (e: any) {
            console.log(e);
        }
        setLoading(false);
    }
    return (
        <div className="load-wrapper">
            <h3>Large Load</h3>
            <LoadingButton
                loading={loading}
                onClick={doTest}
                variant="contained"
                disableElevation
            >
                40,000 req/second for 5 seconds
            </LoadingButton>
        </div>
    )
}

export default LargeLoad;