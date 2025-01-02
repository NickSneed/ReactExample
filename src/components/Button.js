import { memo } from "react";

function Button(props) {
    const doSomething = (a) => {
        console.log(`test ${a.type}`);
    }

    return <button onClick={doSomething}>{props.txt}</button>;
}

export default memo(Button);