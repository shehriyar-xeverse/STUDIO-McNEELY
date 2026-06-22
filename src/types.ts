/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  year: string;
  location: string;
  images: string[];
  scope: string[];
  size?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
}

export interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  projectAddress: string;
  projectScope: string;
  preferredContact: string;
  message: string;
}

export type PageId = 'home' | 'portfolio' | 'services' | 'about' | 'contact';
