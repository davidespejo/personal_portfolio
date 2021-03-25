import React, { CSSProperties } from 'react';
import Color from '../../interfaces/color.interface';

export default function Triangle({ color }: { color: Color }) {
    const styles: CSSProperties = {
        backgroundColor: color.value,
    };

    return <div className='triangle' style={styles} />;
}
