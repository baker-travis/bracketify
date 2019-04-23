import React from 'react';
import { Formik } from 'formik';

import SetupForm from './SetupForm';

export default function Setup() {
    return (
        <>
            <p>Enter your tournament information</p>
            <Formik component={SetupForm} />
        </>
    );
}