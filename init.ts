import YoutubeWebSite from "./Websites/Youtube/YoutubeWebSite";

(async () => {
  const youtube = await YoutubeWebSite.load();
  const ytStudio = await youtube.load("YoutubeStudio");
  await youtube.quit.now();
})();
