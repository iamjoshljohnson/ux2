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

import { ExperienceFactoryInterface } from '@uxjs/ux/experience-factory.interface';
import { HTMLExperienceElement } from '@uxjs/ux/html-experience-element.interface';
import { UxDebugClass } from '@uxjs/ux/debug.class';
import { UxHelperClass } from '@uxjs/ux-helper.class';

/**
 * The main entry point into the UXjs API. This class ties together all of the logic
 * between HTMLElements and the experience definitions.
 */
export class UxClass {

    /**
     * Registers an experience with the UXjs framework.
     * @param name The name the that will tie the experience instance to the html node [data-ux]
     * @param factory A callback that returns an object that matches the ExperienceInterface
     */
    public experience(name: string, factory: ExperienceFactoryInterface): void {
        const uxHelperClass = UxHelperClass.get();
        uxHelperClass.registerExperience(name, factory);
    }

    /**
     * Initializes ux experiences from the DOM. Also an alias for ux.update().
     */
    public init(): void {
        this.update();
    }

    /**
     * Issues a notification to all experiences that something has updated and will
     * invoke each experience's onUpdate() callback method.
     */
    public update(): void {
        const uxHelperClass = UxHelperClass.get();
        const experienceElements: NodeListOf<HTMLExperienceElement> = document.querySelectorAll('[data-ux]');
        experienceElements.forEach((element: HTMLExperienceElement) => {
            const hasParentExperienceElement: boolean = (uxHelperClass.getExperienceElementParent(element)) ? true : false;
            if (!hasParentExperienceElement) {
                uxHelperClass.bindUxToElement(element);
                element.ux.update();
            }
        });
    }

    /**
     * Turns on or off debugging on the page. When this method is invoked, a notification will
     * be sent to each experience to invoke either the onDebugEnabled() or onDebugDisabled()
     * method.
     * @param enableDebug Should we enable debug. Debug is enabled by default.
     */
    public debug(enableDebug: boolean): void {
        const uxHelperClass = UxHelperClass.get();
        const shouldEnableDebug = (enableDebug !== false) ? true : false;
        UxDebugClass.enableDebug(shouldEnableDebug);

        const experienceElements: NodeListOf<HTMLExperienceElement> = document.querySelectorAll('[data-ux]');
        experienceElements.forEach((element: HTMLExperienceElement) => {
            const hasParentExperienceElement: boolean = (uxHelperClass.getExperienceElementParent(element)) ? true : false;
            if (!hasParentExperienceElement) {
                uxHelperClass.bindUxToElement(element);
                element.ux.debug();
            }
        });
    }
}
