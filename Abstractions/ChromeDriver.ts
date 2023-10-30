import path from "node:path";
import { Builder, ThenableWebDriver } from "selenium-webdriver";
import { Options as ChromeOptions } from "selenium-webdriver/chrome";

/**
 * Defines the options type for the constructor of the ChromeDriver class.
 */
export interface ChromeDriverOptions {
  isHeadless: boolean;
  userProfile: string;
  userdataDir: string;
  uploadDir: string;
  downloadDir: string;
  screenshotDir: string;
  sourceDir: string;
  width: number;
  height: number;
}

export default class ChromeDriver {
  public static readonly DefaultOptions: ChromeDriverOptions = {
    isHeadless: false,
    userProfile: "Default",
    userdataDir: path.resolve(__dirname, "./../userdata"),
    uploadDir: path.resolve(__dirname, "./../resources/upload"),
    downloadDir: path.resolve(__dirname, "./../resources/download"),
    screenshotDir: path.resolve(__dirname, "./../resources/screenshot"),
    sourceDir: path.resolve(__dirname, "./../resources/source"),
    width: 1366,
    height: 768,
  };

  public readonly thenableDriver: ThenableWebDriver;

  /**
   * Construct and return a Chrome WebDriver instance to start a session with a Chrome browser and to control it.
   * @param options Give options to the chrome webdriver.
   * @return Returns a chrome web driver instance.
   */
  constructor(options: ChromeDriverOptions = ChromeDriver.DefaultOptions) {
    // Define a Chrome builder instance
    const builder = new Builder().forBrowser("chrome");

    // Define the chrome builder options
    const { isHeadless, downloadDir, userdataDir, userProfile, width, height } =
      options;
    const chromeOptions = new ChromeOptions()
      .setUserPreferences({ "download.default_directory": downloadDir })
      .addArguments(`user-data-dir=${userdataDir}`)
      .addArguments(`profile-directory=${userProfile}`)
      .addArguments(`window-size=${width},${height}`)
      .excludeSwitches("enable-logging");

    if (isHeadless) chromeOptions.headless();

    // Set the chrome options
    builder.setChromeOptions(chromeOptions);

    // Create a Chrome Web Driver instance
    this.thenableDriver = builder.build();
  }

  /**
   * Methods to manage the chrome webdriver
   */
  public readonly manage = {
    implicitWait: async (ms: number) => {
      await this.thenableDriver.manage().setTimeouts({ implicit: ms });
    },
    resize: async (operation: "max" | "min") => {
      if (operation === "max")
        await this.thenableDriver.manage().window().maximize();
      else await this.thenableDriver.manage().window().minimize();
    },
  };
}
