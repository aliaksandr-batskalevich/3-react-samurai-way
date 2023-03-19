import React from "react";
import TestRenderer, {create} from 'react-test-renderer';
import {ProfileStatus} from "./ProfileStatus";

describe('statusComponentTest', () => {
    test('Status from props should be in the state', () => {

        const MyComponent = <ProfileStatus aboutMe={{isLoading: false, status: 'Yo!'}} isMyAccountPage={true} changeProfileStatus={() => {}} />;

        const component = create(MyComponent);
        const instance = component.getInstance();
        // @ts-ignore
        expect(instance.state.status).toBe('Yo!')

        // const testRenderer = TestRenderer.create(MyComponent);
        // const testInstance = testRenderer.root.instance;
        // expect(testInstance.state.status).toBe('Yo!');

    })
})