import React, { useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';

// Custom hook for auto-tabbing
export default function useAutoTab(maxLength) {
    const refs = useRef([]);

    const autoTab = (e) => {
        const index = refs.current.indexOf(e.target);
        if (e.target.value.length >= maxLength && index >= 0 && index < refs.current.length - 1) {
            refs.current[index + 1].focus();
        }
    };

    return { refs, autoTab };
}