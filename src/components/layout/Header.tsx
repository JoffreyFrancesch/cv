import React from "react";
import { FormattedMessage } from "react-intl";

export const Header : React.FC = () => {
    return (
        <div>
            <button><FormattedMessage id="btn.change.langage" /></button>
        </div>
    )
}