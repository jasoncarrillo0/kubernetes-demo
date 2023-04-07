import { useEffect, useMemo, useState } from 'react';
import s from './WorkerDisplay.module.scss';

type Props = {

}

const WorkerDisplay = ({}: Props) => {

    const pingTool: Worker = useMemo(
        () => new Worker(new URL("../ping-worker.ts", import.meta.url)),
        []
    );

    const [successfulRequests, setSuccessfulRequests] = useState(0);

    useEffect(() => {
        if (window.Worker) {
            pingTool.onmessage = (e: MessageEvent<string>) => {
                const currReqNum = Number(e.data);
                setSuccessfulRequests(currReqNum);
            };
        }
    }, [pingTool])


    return (
        <div className={s.wrap}>
          Requests hit at route "/consistent": {successfulRequests}
        </div>
    )
}

export default WorkerDisplay;