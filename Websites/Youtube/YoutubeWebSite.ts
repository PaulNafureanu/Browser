import WebSite, { WebSiteOptions } from "../../Abstractions/WebSite";
import ChannelDashboard from "./ChannelDashboard/ChannelDashboard";
import YoutubeHomePage from "./Homepage/YoutubeHomePage";
import YoutubeStudio from "./YoutubeStudio/YoutubeStudio";

export default class YoutubeWebSite extends WebSite {
  protected webPages = {
    HomePage: new YoutubeHomePage("https://www.youtube.com/"),
    ChannelDashboard: new ChannelDashboard(
      "https://www.youtube.com/channel/UCopd8ft4OZRkVa2nG7ZA4HQ"
    ),
    YoutubeStudio: new YoutubeStudio(
      "https://studio.youtube.com/channel/UCopd8ft4OZRkVa2nG7ZA4HQ"
    ),
  } as const;

  public static readonly load = (
    options: WebSiteOptions = WebSite.DefaultOptions
  ) => super.loadWebSite(options) as Promise<YoutubeWebSite>;

  public readonly load = <P extends keyof typeof this.webPages>(page: P) =>
    super.loadPage(page) as Promise<(typeof this.webPages)[P]>;
}
