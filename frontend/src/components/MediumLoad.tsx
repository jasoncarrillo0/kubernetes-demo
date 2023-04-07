import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import { initiateMediumLoad } from "../helpers";

type Props = {

}

const MediumLoad = ({}: Props) => {

    const [loading, setLoading] = useState(false);

    async function doTest() {
        setLoading(true);
        try {
            const message = await initiateMediumLoad();
            console.log(message);
        } catch (e: any) {
            console.log(e);
        }
        setLoading(false);
    }

    return (
        <div className="load-wrapper">
            <h3>Medium Load</h3>
            <LoadingButton
                loading={loading}
                onClick={doTest}
                variant="contained"
                disableElevation
            >
                10,000 req/second for 5 seconds
            </LoadingButton>
        </div>
    )
}

export default MediumLoad;