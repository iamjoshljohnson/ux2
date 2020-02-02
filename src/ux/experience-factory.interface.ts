import { ExperienceInterface } from '@ux2/ux/experience.interface';
import { HTMLExperienceElement } from '@ux2/ux/html-experience-element.interface';

export type ExperienceFactoryInterface = (id: string, element: HTMLExperienceElement) => ExperienceInterface;
