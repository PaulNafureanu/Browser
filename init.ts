import YoutubeWebSite from "./Websites/Youtube/YoutubeWebSite";

(async () => {
  const youtube = await YoutubeWebSite.load();
  await youtube.quit.now();
})();
