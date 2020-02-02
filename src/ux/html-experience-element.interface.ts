import { ExperienceInterface } from '@ux2/ux/experience.interface';

export interface HTMLExperienceElement extends HTMLElement {

    /**
     * An object added by the browser for HTML5 data-{name} attributes.
     * Any HTMLExperienceElement bound by this framework should include
     * a element.dataset.ux value that represents the experiences bound
     * to that element.
     */
    dataset: {
        [key: string]: string;
        ux: string;
    }

    /**
     * An object that contains instances of user experiences
     * tied to the HTMLElement.
     */
    _ux: {
        [key: string]: ExperienceInterface;
    };

    /**
     * A method that allows you to access th HTMLElement's experience instance.
     */
    ux: {
        (experienceId: string): ExperienceInterface | undefined;
        update: () => void;
        debug: () => void;
        parent: () => HTMLExperienceElement | undefined;
        children: () => Array<HTMLExperienceElement>;
    };

}
