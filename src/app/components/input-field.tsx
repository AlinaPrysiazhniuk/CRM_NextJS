'use client';

import React from 'react';
import { Field } from 'formik';

export interface InputFieldProps {
    label?: string;
    placeholder?: string;
    name: string;
    type?: string;
    as?: 'input' | 'select' | 'textarea'; // додано тут
    required?: boolean;
    children?: React.ReactNode; // додано тут
}

export default function InputField({ label, as = 'input', children, ...rest }: InputFieldProps) {
    return (
        <div className="flex flex-col">
            {label && <label htmlFor={rest.name} className="mb-2 text-base color-gray-900">{label}</label>}
            <Field as={as} {...rest} className="p-3 h-11 text-sm rounded border border-gray-300 shadow">
                {children}
            </Field>
        </div>
    );
}
