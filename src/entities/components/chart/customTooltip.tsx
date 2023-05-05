import React, {FC} from 'react';

interface IType {
    active?: any;
    payload?: any;
    label?: any;
}

const CustomTooltip = ({ active, payload, label }:any) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="blue">${payload[0].value}</p>
                {
                    payload.length >1 &&
                    <p className="green">${payload[1].value}</p>
                }

            </div>
        );
    }

    return null;
};

export default CustomTooltip;