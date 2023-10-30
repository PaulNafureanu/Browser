import fs from "node:fs";
import { WebDriver } from "selenium-webdriver";
import HomePage from "./HomePage";
import WebPage from "./WebPage";
import ChromeDriver, { ChromeDriverOptions } from "./ChromeDriver";

export interface WebSiteOptions {
  implicitWait: number;
  driverOptions: ChromeDriverOptions;
}

export interface WebPages {
  HomePage: HomePage;
  [webpages: string]: WebPage;
}

export default class WebSite {
  public static readonly DefaultOptions: WebSiteOptions = {
    implicitWait: 0,
    driverOptions: ChromeDriver.DefaultOptions,
  };

  protected options: WebSiteOptions;
  protected chrome: WebDriver;
  protected webpages: WebPages;

  protected constructor(
    options: WebSiteOptions = WebSite.DefaultOptions,
    chrome: WebDriver
  ) {
    this.options = options;
    this.chrome = chrome;
  }

  public static readonly loadWebSite = async (
    options: WebSiteOptions = WebSite.DefaultOptions
  ) => {
    const driver = new ChromeDriver(options.driverOptions);
    await driver.manage.implicitWait(0);
    await driver.manage.resize("max");

    const chrome = await driver.thenableDriver;
    const website = new WebSite(options, chrome);
    const homepage = website.webpages.HomePage;

    await website.chrome.get(homepage.url);
    await website.isLoaded(homepage.url);
    return website;
  };

  protected readonly loadPage = async (page: string) => {
    await this.chrome.get(this.webpages[page].url);
    return await this.get.currentWebPage();
  };

  private isLoaded = async (url: string) => {
    return true;
  };

  /**
   * Methods to return resources or do actions with the web driver
   */
  protected readonly get = {
    currentURL: async () => await this.chrome.getCurrentUrl(),
    currentWebPage: async () => {
      const { webpages: pages } = this;
      const currentUrl = await this.get.currentURL();
      let pageKey: keyof typeof pages;
      for (pageKey in pages) {
        if (pages[pageKey].url === currentUrl) {
          return pages[pageKey];
        }
      }
    },
    screenshotAsFile: async (
      filename: string = "screenshot.png",
      folderPath = this.options.driverOptions.screenshotDir
    ) => {
      const image = await this.chrome.takeScreenshot();
      fs.writeFile(folderPath + filename, image, "base64", (err) => {
        if (err) console.log("Error when saving the screenshot: " + err);
      });
    },
    pageSourceAsFile: async (
      filename: string = "index.html",
      folderPath: string = this.options.driverOptions.sourceDir
    ) => {
      const pageSource = await this.chrome.getPageSource();
      fs.writeFile(folderPath + filename, pageSource, "utf-8", (err) => {
        if (err) console.log("Error when saving the page source: " + err);
      });
    },
  };

  /**
   * Methods for quitting and closing the current webdriver
   */
  public readonly quit = {
    now: async () => await this.chrome.quit(),
    after: async (ms: number) =>
      setTimeout(async () => {
        await this.chrome.quit();
      }, ms),
  };
}
