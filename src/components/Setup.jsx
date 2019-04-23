import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup'; // for everything

import SetupForm from './SetupForm';
import {useSetupForm} from '../context/setup-form';

export const FORM_NAMES = {
    NAME: 'tourney_name',
    START_DATE: 'start_date',
    END_DATE: 'end_date',
    NUM_TEAMS: 'num_teams'
};

const SETUP_SCHEMA = yup.object().shape({
    [FORM_NAMES.NAME]: yup.string().required('Required'),
    [FORM_NAMES.START_DATE]: yup.date('Please enter a valid date'),
    [FORM_NAMES.END_DATE]: yup.date('Please enter a valid date'),
    [FORM_NAMES.NUM_TEAMS]: yup.number('Please enter a valid number').min(2, 'Not enough teams').required('Required')
});

const Setup = React.memo(function Setup() {
    const formActions = useSetupForm();
    return (
        <>
            <p>Enter your tournament information</p>
            <Formik
                component={SetupForm}
                validationSchema={SETUP_SCHEMA}
                initialValues={{
                    [FORM_NAMES.NAME]: '',
                    [FORM_NAMES.START_DATE]: '',
                    [FORM_NAMES.END_DATE]: '',
                    [FORM_NAMES.NUM_TEAMS]: ''
                }}
                onSubmit={
                    (values) => {
                        console.log(values);
                        formActions.setName(values[FORM_NAMES.NAME]);
                        formActions.setStartDate(values[FORM_NAMES.START_DATE]);
                        formActions.setEndDate(values[FORM_NAMES.END_DATE]);
                        formActions.setNumTeams(values[FORM_NAMES.NUM_TEAMS]);
                    }
                }
            />
        </>
    );
});

export default Setup;