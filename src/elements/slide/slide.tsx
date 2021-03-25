import React from 'react';
import Color from '../../interfaces/color.interface';

import './slide.scss';

function Slide(
    {
        backgroundColor,
    }: {
        backgroundColor: Color;
    },
    ref: React.Ref<HTMLDivElement>
) {
    const slideStyle = {
        backgroundColor: backgroundColor.value,
    };

    return <div ref={ref} className={`slide`} style={slideStyle} />;
}

export default React.forwardRef(Slide);
