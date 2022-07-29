import { render, screen } from 'test-setup';
import { StepNavigationProps } from '@core/wizard/types';
import DesktopStepNavigation from '../desktop-wizard/step-navigation';

describe('StepNavigation Component', () => {
    const props: StepNavigationProps = {
        steps: [
            {
                title: 'Product',
            },
            {
                title: 'App',
            },
            {
                title: 'Complete',
            },
        ],
        dark: false,
        current_step_index: 0,
        complete_steps_indexes: [],
        onClick: jest.fn(),
    };

    it('StepNavigation renders properly', () => {
        render(<DesktopStepNavigation {...props} />);

        const step_navigation = screen.getByTestId('step-navigation');
        const steps = screen.getAllByTestId('step-item');

        expect(step_navigation).toBeInTheDocument();
        expect(steps.length).toBe(3);
        expect(steps[0]).toHaveTextContent(/product/i);
        expect(steps[1]).toHaveTextContent(/app/i);
        expect(steps[2]).toHaveTextContent(/complete/i);
    });
});
