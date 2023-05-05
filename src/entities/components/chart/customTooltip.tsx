import React, {FC} from 'react';

interface IType {
    active?: any;
    payload?: any;
    label?: any;
}

const CustomTooltip: FC<IType> = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`${label} : ${payload[0].value}`}</p>
                <p className="desc">Anything you want can be displayed here.</p>
            </div>
        );
    }

    return null;
};

export default CustomTooltip;