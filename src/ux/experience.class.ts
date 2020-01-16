/**
 *    __  _____   ___   __          __
 *   / / / /   | <  /  / /   ____ _/ /_  _____
 *  / / / / /| | / /  / /   / __ `/ __ `/ ___/
 * / /_/ / ___ |/ /  / /___/ /_/ / /_/ (__  )
 * `____/_/  |_/_/  /_____/`__,_/_.___/____/
 *
 * @package UXjs
 * @author UA1 Labs Developers https://ua1.us
 * @copyright Copyright (c) UA1 Labs
 */

import { ExperienceInterface } from '@uxjs/ux/experience.interface';
import { HTMLExperienceElement } from '@uxjs/ux/html-experience-element.interface';

/**
 * The abstract class all experiences should inheret from.
 */
export abstract class ExperienceClass implements ExperienceInterface {

    /**
     * The id of the experience. This experience id will match what
     * you declare in the HTML.
     *
     * example:
     * <div data-ux="experience1"></div>
     *
     * In the case above, "experience1" will be the id
     */
    public id: string;

    /**
     * The HTMLElement the experience is tied to. The reason it is defined
     * as a HTMLExperienceElement is because UXjs adds a "uxs" object to the
     * HTMLElement that will contain the instances of the experiences tied
     * to that particular HTMLElement.
     */
    public element: HTMLExperienceElement;

    /**
     * The constructor.
     * @param id
     * @param element
     */
    public constructor(id: string, element: HTMLExperienceElement) {
        this.id = id;
        this.element = element;
    }

}
