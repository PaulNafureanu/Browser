import PageComponent from "../../../../Abstractions/PageComponent";

export default class AccountMenu extends PageComponent {
  protected static locators = {
    Menu: {
      IDLocator: "avatar-btn",
      CSSLocator: "#buttons .style-scope > button",
      CSSLocator2: "#end ytd-topbar-menu-button-renderer > button",
      CSSLocator3: "#buttons ytd-topbar-menu-button-renderer > button",
      XPath:
        "/html/body/ytd-app/div[1]/div/ytd-masthead/div[4]/div[3]/div[2]/ytd-topbar-menu-button-renderer[2]/button",
    },
    Channel: {
      IDLocator: "",
      CSSLocator: "#items > ytd-compact-link-renderer:nth-child(1)",
      CSSLocator2:
        "ytd-popup-container tp-yt-iron-dropdown #items > ytd-compact-link-renderer:nth-child(1)",
      CSSLocator3:
        "ytd-popup-container tp-yt-iron-dropdown #items > ytd-compact-link-renderer:nth-child(1) a",
      XPath:
        "/html/body/ytd-app/ytd-popup-container/tp-yt-iron-dropdown/div/ytd-multi-page-menu-renderer/div[3]/div[1]/yt-multi-page-menu-section-renderer[1]/div[2]/ytd-compact-link-renderer[1]",
    },
    Studio: {
      IDLocator: "",
      CSSLocator: "#items > ytd-compact-link-renderer:nth-child(2)",
      CSSLocator2:
        "ytd-popup-container tp-yt-iron-dropdown #items > ytd-compact-link-renderer:nth-child(2)",
      CSSLocator3:
        "ytd-popup-container tp-yt-iron-dropdown #items > ytd-compact-link-renderer:nth-child(2) a",
      XPath:
        "/html/body/ytd-app/ytd-popup-container/tp-yt-iron-dropdown/div/ytd-multi-page-menu-renderer/div[3]/div[1]/yt-multi-page-menu-section-renderer[1]/div[2]/ytd-compact-link-renderer[2]",
    },
    Account: {
      IDLocator: "",
      CSSLocator: "#items > ytd-compact-link-renderer:nth-child(3)",
      CSSLocator2:
        "ytd-popup-container tp-yt-iron-dropdown #items > ytd-compact-link-renderer:nth-child(3)",
      CSSLocator3:
        "ytd-popup-container tp-yt-iron-dropdown #items > ytd-compact-link-renderer:nth-child(3) a",
      XPath:
        "/html/body/ytd-app/ytd-popup-container/tp-yt-iron-dropdown/div/ytd-multi-page-menu-renderer/div[3]/div[1]/yt-multi-page-menu-section-renderer[1]/div[2]/ytd-compact-link-renderer[3]",
    },
    SignIn: {
      IDLocator: "",
      CSSLocator: "#buttons ytd-button-renderer yt-button-shape",
      CSSLocator2: "#end ytd-button-renderer yt-button-shape",
      CSSLocator3: "#end ytd-button-renderer yt-button-shape > a",
      XPath:
        "/html/body/ytd-app/div[1]/div/ytd-masthead/div[4]/div[3]/div[2]/ytd-button-renderer/yt-button-shape",
    },
    SignOut: {
      IDLocator: "",
      CSSLocator: "#items > ytd-compact-link-renderer:nth-child(4)",
      CSSLocator2:
        "ytd-popup-container tp-yt-iron-dropdown #items > ytd-compact-link-renderer:nth-child(4)",
      CSSLocator3:
        "ytd-popup-container tp-yt-iron-dropdown #items > ytd-compact-link-renderer:nth-child(4) a",
      XPath:
        "/html/body/ytd-app/ytd-popup-container/tp-yt-iron-dropdown/div/ytd-multi-page-menu-renderer/div[3]/div[1]/yt-multi-page-menu-section-renderer[1]/div[2]/ytd-compact-link-renderer[4]",
    },
  };

  public readonly elements = this.locatorsToElements(AccountMenu.locators);
}
