import { ExperienceInterface } from '@uxjs/ux/experience.interface';
import { HTMLExperienceElement } from '@uxjs/ux/html-experience-element.interface';

export type ExperienceFactoryInterface = (id: string, element: HTMLExperienceElement) => ExperienceInterface;
