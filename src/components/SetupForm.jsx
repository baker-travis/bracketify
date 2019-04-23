import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Field, ErrorMessage, Form} from 'formik';

import {FORM_NAMES} from './Setup';

const Label = styled.label`
    display: block;
`;

export default function SetupForm({handleBlur, handleChange, handleSubmit, values, errors}) {
    console.log(errors);
    function renderTextField(label, name, type = 'text') {
        return (
            <Label>
                {label}:{' '}
                <Field
                    type={type}
                    name={name}
                />
                <ErrorMessage name={name} />
            </Label>
        );
    }

    return (
        <Form>
            {renderTextField('Tournament Name', FORM_NAMES.NAME)}
            {renderTextField('Start Date', FORM_NAMES.START_DATE)}
            {renderTextField('End Date', FORM_NAMES.END_DATE)}
            {renderTextField('Number of Teams', FORM_NAMES.NUM_TEAMS, 'number')}
            {values[FORM_NAMES.NUM_TEAMS] && !isBalancedBracket(values[FORM_NAMES.NUM_TEAMS]) && <p className="warning">The bracket will not be balanced without a 2 based number (2, 4, 8, 16, etc.)</p>}
            <button type="submit">Submit</button>
        </Form>
    )
}

SetupForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired,
    values: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

function isBalancedBracket(numTeams) {
    const number = Number(numTeams);
    return numTeams && number > 1 && (number & (number - 1)) === 0;
}