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

import { AriaCheckboxExperience } from '@uxjs/experiences/aria/aria-checkbox.experiece';
import { HTMLExperienceElement } from '@uxjs/ux/html-experience-element.interface';
import { UxClass } from '@uxjs/ux.class';

const ux = new UxClass();

// registering default experiences
ux.experience(AriaCheckboxExperience.NAME, (id: string, element: HTMLExperienceElement) => {
    return new AriaCheckboxExperience(id, element);
});

// exporting ux to window object
(<any>window).ux = ux;

export { ux };
