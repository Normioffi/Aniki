const MALUrl = "https://api.myanimelist.net/v2";

const MALFields = Object.freeze([
  "id",
  "title",
  "main_picture",
  "alternative_titles",
  "start_date",
  "end_date",
  "synopsis",
  "mean",
  "rank",
  "popularity",
  "num_list_users",
  "num_scoring_users",
  "nsfw",
  "created_at",
  "updated_at",
  "media_type",
  "status",
  "genres",
  "my_list_status",
  "num_episodes",
  "start_season",
  "broadcast",
  "source",
  "average_episode_duration",
  "rating",
  "pictures",
  "background",
  "related_anime",
  "related_manga",
  "recommendations",
  "studios",
  "statistics",
]);

const MALHeaders = Object.freeze({
  "Content-Type": "application/json",
  Accept: "application/json",
});

const MALSeason = Object.freeze(["spring", "summer", "fall", "winter"]);

const MALRankingType = Object.freeze([
  "all",
  "airing",
  "upcoming",
  "tv",
  "ova",
  "movie",
  "special",
  "bypopularity",
  "favorite",
]);

const MMLRankingType = Object.freeze([
  "all",
  "manga",
  "novels",
  "oneshots",
  "doujin",
  "manhwa",
  "manhua",
  "bypopularity",
  "favorite",
]);

module.exports = {
  MALFields,
  MALUrl,
  MALHeaders,
  MALSeason,
  MALRankingType,
  MMLRankingType,
};
