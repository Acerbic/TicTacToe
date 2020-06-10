import React, { useEffect } from "react";
import { AppProps } from "next/app";
import { RecoilRoot, useRecoilState } from "recoil";

import {
    playerAuthState,
    playerAuthStateInitializer
} from "../state-defs/playerAuth";

// Tailwind CSS + custom components
import "../components/tailwind/index.css";

const RecoilDependent: React.FC = ({ children }) => {
    // initiating stored playerAuth session from Local Storage
    const [value, setValue] = useRecoilState(playerAuthState);
    useEffect(() => {
        playerAuthStateInitializer(setValue, {
            name: "Anonymous",
            token: null
        });
    }, []);
    return <>{children}</>;
};

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <RecoilDependent>
                <Component {...pageProps} />
            </RecoilDependent>
        </RecoilRoot>
    );
}

export default MyApp;
