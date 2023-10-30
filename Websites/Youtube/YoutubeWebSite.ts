import WebSite, { WebSiteOptions } from "../../Abstractions/WebSite";
import ChannelDashboard from "./ChannelDashboard/ChannelDashboard";
import YoutubeHomePage from "./Homepage/YoutubeHomePage";
import StudioAnalytics from "./YoutubeStudio/Analytics/StudioAnalytics";
import StudioComments from "./YoutubeStudio/Comments/StudioComments";
import StudioContent from "./YoutubeStudio/Content/StudioContent";
import StudioCopyright from "./YoutubeStudio/Copyright/StudioCopyright";
import StudioCustomization from "./YoutubeStudio/Customization/StudioCustomization";
import StudioDashboard from "./YoutubeStudio/Dashboard/StudioDashboard";
import StudioEarn from "./YoutubeStudio/Earn/StudioEarn";
import StudioLibrary from "./YoutubeStudio/Library/StudioLibrary";
import StudioSubtitles from "./YoutubeStudio/Subtitles/StudioSubtitles";

export default class YoutubeWebSite extends WebSite {
  private static MainURL = "https://www.youtube.com/";
  private static StudioURL = "https://studio.youtube.com/";
  private channelID = "UCopd8ft4OZRkVa2nG7ZA4HQ";

  private url = (config: {
    useDomain?: "main" | "studio";
    usePrefix?: "channel";
    useEntry?: string;
    useQuery?: string;
  }) => {
    const { useDomain, usePrefix, useEntry, useQuery } = config;
    let domain =
      useDomain === "studio"
        ? YoutubeWebSite.StudioURL
        : YoutubeWebSite.MainURL;
    let prefix =
      usePrefix === "channel" ? "channel/" + this.channelID + "/" : "";
    let entry = useEntry ? useEntry + "/" : "";
    let query = useQuery ? "?" + useQuery : "";
    return domain + prefix + entry + query;
  };

  protected webPages = {
    HomePage: new YoutubeHomePage(this.url({ useDomain: "main" })),
    ChannelDashboard: new ChannelDashboard(
      this.url({ useDomain: "main", usePrefix: "channel" })
    ),
    StudioAnalytics: new StudioAnalytics(
      this.url({ useDomain: "studio", useEntry: "analytics" })
    ),
    StudioComments: new StudioComments(
      this.url({ useDomain: "studio", useEntry: "comments" })
    ),
    StudioContent: new StudioContent(
      this.url({ useDomain: "studio", useEntry: "videos" })
    ),
    StudioCopyright: new StudioCopyright(
      this.url({ useDomain: "studio", useEntry: "copyright" })
    ),
    StudioCustomization: new StudioCustomization(
      this.url({ useDomain: "studio", useEntry: "editing" })
    ),
    StudioDashboard: new StudioDashboard(this.url({ useDomain: "studio" })),
    StudioEarn: new StudioEarn(
      this.url({ useDomain: "studio", useEntry: "monetization" })
    ),
    StudioLibrary: new StudioLibrary(
      this.url({ useDomain: "studio", useEntry: "music" })
    ),
    StudioSubtitles: new StudioSubtitles(
      this.url({ useDomain: "studio", useEntry: "translations" })
    ),
  } as const;

  public static readonly load = (
    options: WebSiteOptions = WebSite.DefaultOptions
  ) => super.loadWebSite(options) as Promise<YoutubeWebSite>;

  public readonly load = <P extends keyof typeof this.webPages>(page: P) =>
    super.loadPage(page) as Promise<(typeof this.webPages)[P]>;
}

const a = {};
