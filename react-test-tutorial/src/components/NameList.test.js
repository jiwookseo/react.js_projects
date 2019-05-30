import React from 'react';
import renderer from 'react-test-renderer';
import NameList from "./NameList";

describe('NameList', () => {
    let component = null;

    it('renders correctly', () => {
        component = renderer.create(<NameList names={["서지욱", "최예음"]} />);
    });

    it('matches snapshot', () => {
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
