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
import { ExperienceInterface } from '@uxjs/ux/experience.interface';
import { HTMLExperienceElement } from '@uxjs/ux/html-experience-element.interface';
import { UxDebugClass } from '@uxjs/ux/debug.class';

/**
 * This helper class is a singleton instance and is meant to provide the public UXjs
 * API with the core logic to make UXjs function.
 */
export class UxHelperClass {

    /**
     * The instance of this class.
     */
    private static instance: UxHelperClass;

    /**
     * A map of factories for binding experiences to elements.
     */
    private experienceFactories: {
        [key: string]: ExperienceFactoryInterface
    };

    /**
     * Determines if an ux.update() scan is in progress.
     */
    public isUpdateScanInProgress: boolean;

    /**
     * Determines if an ux.debug() scan is in progress.
     */
    public isDebugScanInProgress: boolean;

    /**
     * The constructor
     */
    private constructor() {
        this.experienceFactories = {};
        this.isUpdateScanInProgress = false;
        this.isDebugScanInProgress = false;
    }

    /**
     * Returns the singleton instance of this class.
     */
    public static get(): UxHelperClass {
        if (!UxHelperClass.instance) {
            UxHelperClass.instance = new UxHelperClass();
        }

        return UxHelperClass.instance;
    }

    /**
     * Registers an experience within the framework. It take in a factory ready to be bound to
     * an element.
     * @param name The name of the experience
     * @param factory The factory that returns an instance of the experience
     */
    public registerExperience(name: string, factory: ExperienceFactoryInterface): void {
        this.experienceFactories[name] = factory;
    }

    /**
     * Determines if the UX object has been bound to an HTMLElement. If the HTMLElement
     * has the UX object bound to it, it is an HTMLExperienceElement.
     * @param element Any HTMLElement
     */
    public isUxBoundToElement(element: HTMLElement): boolean {
        const experienceElement = element as HTMLExperienceElement;
        if (experienceElement && experienceElement.ux) {
            return true;
        }

        return false;
    }

    /**
     * Binds the UX object to an HTMLElement.
     * @param element Any HTMLElement
     */
    public bindUxToElement(element: HTMLElement): void {
        if (!element) {
            const elementError = 'In order to bind UX to an element, ' +
                'you must specify the element you intend to bind.';
            UxDebugClass.error(elementError);
            return;
        }

        const experienceElement = element as HTMLExperienceElement;
        if (!this.isUxBoundToElement(experienceElement)) {
            experienceElement.ux = (() => {
                const ux = (name: string): ExperienceInterface | undefined => {
                    if (experienceElement._ux && experienceElement._ux[name]) {
                        return experienceElement._ux[name];
                    }
                    return undefined;
                };
                ux.update = () => {
                    if (!this.isUpdateScanInProgress) {
                        this.isUpdateScanInProgress = true;
                        const experiences: Array<string> =
                            experienceElement.dataset.ux ? experienceElement.dataset.ux.split(' ') : [];

                        experiences.forEach((experience: string) => {
                            if (!experienceElement.ux(experience)) {
                                this.bindExperienceToElement(experience, experienceElement);
                            }

                            const experienceInstance = experienceElement.ux(experience);
                            if (experienceInstance && experienceInstance.onUpdate) {
                                UxDebugClass.info('{' + experience + '}.onUpdate()');
                                experienceInstance.onUpdate();
                            }
                        });
                        this.isUpdateScanInProgress = false;

                        const childExperienceElements = this.getExperienceElementChildren(experienceElement);
                        childExperienceElements.forEach((childExperienceElement: HTMLExperienceElement) => {
                            this.bindUxToElement(childExperienceElement);
                            childExperienceElement.ux.update();
                        });
                    } else {
                        const updateError = 'An update was invoked within an already running update loop.';
                        UxDebugClass.error(updateError);
                    }
                };
                ux.debug = () => {
                    if (!this.isDebugScanInProgress) {
                        const experiences: Array<string> =
                        experienceElement.dataset.ux ? experienceElement.dataset.ux.split(' ') : [];

                        experiences.forEach((experience: string) => {
                            if (!experienceElement.ux(experience)) {
                                this.bindExperienceToElement(experience, experienceElement);
                            }

                            const experienceInstance = experienceElement.ux(experience);
                            if (
                                UxDebugClass.isDebugEnabled &&
                                experienceInstance &&
                                experienceInstance.onDebugEnabled
                            ) {
                                UxDebugClass.info('{' + experience + '}.onDebugEnabled()');
                                experienceInstance.onDebugEnabled();
                            } else if (
                                !UxDebugClass.isDebugEnabled &&
                                experienceInstance &&
                                experienceInstance.onDebugDisabled
                            ) {
                                UxDebugClass.info('{' + experience + '}.onDebugDisabled()');
                                experienceInstance.onDebugDisabled();
                            }
                        });

                        const childExperienceElements = this.getExperienceElementChildren(experienceElement);
                        childExperienceElements.forEach((childExperienceElement: HTMLExperienceElement) => {
                            this.bindUxToElement(childExperienceElement);
                            childExperienceElement.ux.debug();
                        });
                    }
                };
                ux.parent = () => {
                    return this.getExperienceElementParent(experienceElement);
                };
                ux.children = () => {
                    return this.getExperienceElementChildren(experienceElement);
                };
                return ux;
            })();
        }
    }

    /**
     * Binds an experience to an element and runs the experience's onInit() method.
     * @param name The name of the experience. The experience must be first registered with ux.experience() first.
     * @param element an HTMLElement you intend to bind the experinece to.
     */
    public bindExperienceToElement(name: string, element: HTMLElement): void {
        if (!this.experienceFactories[name]) {
            const nameError = 'The user experience "' + name + '" must be registered with UXjs';
            UxDebugClass.warn(nameError);
            return;
        }
        if (!element) {
            const elementError = 'In order to bind an experience to an element, ' +
                'you must specify the element you intend to bind the experience to.';
            UxDebugClass.error(elementError);
            return;
        }

        const experienceElement: HTMLExperienceElement = element as HTMLExperienceElement;
        experienceElement._ux = experienceElement._ux || {};
        if (!experienceElement._ux[name]) {
            const experience = this.experienceFactories[name](name, experienceElement)
            if (experience.onInit) {
                UxDebugClass.info('{' + name + '}.onInit()');
                experience.onInit();
            }
            experienceElement._ux[name] = experience;
        }
    }

    /**
     * Finds and returns the HTMLExperienceElement parent of any HTMLElement passed in.
     * @param element HTMLElement
     */
    public getExperienceElementParent(element: HTMLElement): HTMLExperienceElement | undefined {
        var parentElement: HTMLElement | null = element.parentElement;
        if (!parentElement) {
            return undefined;
        } else if (
            parentElement
            && parentElement.dataset
            && parentElement.dataset.ux
        ) {
            return parentElement as HTMLExperienceElement;
        };
        return this.getExperienceElementParent(parentElement);
    }

    /**
     * Returns an array of all the HTMLExperienceElement children of any HTMLElement
     * @param element
     */
    public getExperienceElementChildren(element: HTMLElement): Array<HTMLExperienceElement> {
        const possibleChildren: NodeListOf<HTMLExperienceElement> = element.querySelectorAll('[data-ux]');
        const childrenElements: Array<HTMLExperienceElement> = [];
        possibleChildren.forEach((possibleChildElement: HTMLExperienceElement) => {
            const childParentElement = this.getExperienceElementParent(possibleChildElement);
            if (childParentElement === element) {
                childrenElements.push(possibleChildElement);
            }
        });
        return childrenElements;
    }

}
