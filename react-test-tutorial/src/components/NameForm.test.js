import React from 'react';
import renderer from 'react-test-renderer';
import NameForm from './NameForm';

describe('NameForm', () => {
    let component = null;

    it('renders correctly', () => {
        component = renderer.create(<NameForm />);
    });

    it('matched snapshot', () => {
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
