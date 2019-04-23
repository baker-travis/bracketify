import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FORM_NAMES = {
    NAME: 'tourney_name',
    START_DATE: 'start_date',
    END_DATE: 'end_date',
    NUM_TEAMS: 'num_teams'
};

const Label = styled.label`
    display: block;
`;

export default function SetupForm({handleBlur, handleChange, handleSubmit, values, errors}) {
    function renderTextField(label, name, type = 'text') {
        return (
            <Label>
                {label}:{' '}
                <input
                    type={type}
                    value={values[name]}
                    name={name} 
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </Label>
        )
    }

    return (
        <form onSubmit={handleSubmit}>
            {renderTextField('Tournament Name', FORM_NAMES.NAME)}
            {renderTextField('Start Date', FORM_NAMES.START_DATE)}
            {renderTextField('End Date', FORM_NAMES.END_DATE)}
            {renderTextField('Number of Teams', FORM_NAMES.NUM_TEAMS)}
            <button type="submit">Submit</button>
        </form>
    )
}

SetupForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired,
    values: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};