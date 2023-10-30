import { WebDriver } from "selenium-webdriver";
import Element, { WebLocator } from "./Element";

export interface WebLocators {
  [webLocators: string]: WebLocator;
}

export type Elements<T> = {
  [key in keyof T]: Element;
};

export default class PageComponent {
  protected static locators: WebLocators;
  protected chrome: WebDriver;
  public readonly elements: Elements<any>;

  constructor(chrome: WebDriver) {
    this.chrome = chrome;
  }

  protected readonly locatorsToElements = <T extends object>(locators: T) => {
    const keys = Object.keys(locators);
    const elements = {};
    for (let key in keys) {
      elements[key] = new Element(this.chrome, locators[key]);
    }
    return elements as Elements<T>;
  };
}
