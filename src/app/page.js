'use client'
import Image from "next/image";

import Main from "./main/main";
import WorkUpdate from "./workUpdate/workUpdate";

export default function Home() {
    return (
        <div id="root">

            <Main />
            <WorkUpdate />

        </div>
    );
}
