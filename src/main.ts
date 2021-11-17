import { defineCustomElement } from 'vue';

import * as customComponents from './components';

const registeredElements: Array<string> = [];

export async function requireComponent(componentName: string) {
  if (!Object.keys(customComponents).includes(componentName)) {
    return console.error(`Component with the name of '${componentName}' not found!`);
  }

  const customTag = componentName.split(/(?=[A-Z])/).join('-').toLowerCase();

  if (registeredElements.includes(customTag)) {
    return console.error(`Component with the name of '${componentName}' attempting to register twice!`);
  }

  registeredElements.push(customTag);

  const componentModule = await customComponents[componentName];
  customElements.define(customTag, defineCustomElement(componentModule.default));
}

export function requireComponents(componentNames: Array<string>) {
  componentNames.forEach(requireComponent);
}

