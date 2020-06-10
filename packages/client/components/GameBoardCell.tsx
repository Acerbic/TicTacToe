import React from "react";
import { useRecoilValue } from "recoil";

import {
    playerIdState,
    roleAssignedState,
    opponentRoleAssignedState
} from "../state-defs";

import styles from "./GameBoardCell.module.css";

interface P {
    onClick: () => void;
    cellTokenPlayerId: string | null;
}

export const GameBoardCell: React.FC<P> = props => {
    const playerId = useRecoilValue(playerIdState);
    const ourRole = useRecoilValue(roleAssignedState);

    // FIXME: causes React warning - possibly a Recoil bug, related to
    // selector()
    // const opponentRole = useRecoilValue(opponentRoleAssignedState);
    const opponentRole = ourRole === "first" ? "second" : "first";

    const cellRole: "first" | "second" | null =
        props.cellTokenPlayerId === null
            ? null
            : props.cellTokenPlayerId === playerId
            ? ourRole!
            : opponentRole;

    const cellContents = cellRole && (cellRole === "first" ? "𝕏" : "𐌏");

    return (
        <div className={styles["board-cell"]} onClick={props.onClick}>
            <span>{cellContents}</span>
        </div>
    );
};

export default GameBoardCell;
