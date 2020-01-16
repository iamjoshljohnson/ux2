import { HTMLExperienceElement } from '@uxjs/ux/html-experience-element.interface';

export interface ExperienceInterface {

    /**
     * The id of the experience. This experience id will match what
     * you declare in the HTML.
     *
     * example:
     * <div data-ux="experience1"></div>
     *
     * In the case above, "experience1" will be the id
     */
    id: string;

    /**
     * The HTMLElement the experience is tied to. The reason it is defined
     * as a HTMLExperienceElement is because UXjs adds a "uxs" object to the
     * HTMLElement that will contain the instances of the experiences tied
     * to that particular HTMLElement.
     */
    element: HTMLExperienceElement;

    /**
     * A life cycle hook method that will be called right after
     * the experience instance object is created.
     */
    onInit?: () => void;

    /**
     * A life cycle hook method that will be called every time
     * the experience is updated.
     */
    onUpdate?: () => void;

    /**
     * A life cycle hook method that will be called when ux.debug(true)
     * is called.
     */
    onDebugEnabled?: () => void;

    /**
     * A life cycle hook method that will be called when ux.debug(false)
     * is called.
     */
    onDebugDisabled?: () => void;

}
