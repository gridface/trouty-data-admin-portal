"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            {
                // "_id": {
                //     "$oid": "59d07766734d1d42e49e1f1f"
                // },
                id: 1,
                name: "Balsam Creek",
                coord: "",
                county: "Douglas",
                state: "wi",
                zipcode: "53590",
                landmark_type: "Creek",
                regulation_type: "Trout Fishing",
                bag_limit: "5",
                min_size: "brook trout 8 inches, brown trout 10 inches, salmon 12 inches and rainbow trout 26 inches",
                release_only: "yes",
                other_restrictions: "5 trout and salmon in total, only 2 of which may be brown trout over 15 inches and only 1 of which may be a rainbow trout",
                open_season_start: "5/6/2017",
                open_season_end: "9/30/2017",
                regulation_year: "2017"
            },
            {
                // "_id": {
                //     "$oid": "59d07766734d1d42e49e1f1f"
                // },
                id: 1,
                name: "Amnicon River",
                coord: "",
                county: "Bayfield",
                state: "wi",
                zipcode: "53590",
                landmark_type: "River",
                regulation_type: "Trout Fishing",
                bag_limit: "5",
                min_size: "brook trout 8 inches, brown trout 10 inches, salmon 12 inches and rainbow trout 26 inches",
                release_only: "yes",
                other_restrictions: "5 trout and salmon in total, only 2 of which may be brown trout over 15 inches and only 1 of which may be a rainbow trout",
                open_season_start: "5/6/2017",
                open_season_end: "9/30/2017",
                regulation_year: "2017"
            },
            {
                // "_id": {
                //     "$oid": "59d07766734d1d42e49e1f1f"
                // },
                id: 2,
                name: "Siskiwit River",
                coord: "",
                county: "Bayfield",
                state: "wi",
                zipcode: "53590",
                landmark_type: "River",
                regulation_type: "Trout Fishing",
                bag_limit: "5",
                min_size: "brook trout 8 inches, brown trout 10 inches, salmon 12 inches and rainbow trout 26 inches",
                release_only: "yes",
                other_restrictions: "5 trout and salmon in total, only 2 of which may be brown trout over 15 inches and only 1 of which may be a rainbow trout",
                open_season_start: "5/6/2017",
                open_season_end: "9/30/2017",
                regulation_year: "2017"
            },
            {
                // "_id": {
                //     "$oid": "59d07766734d1d42e49e1f1f"
                // },
                id: 3,
                name: "White River",
                coord: "",
                county: "Bayfield",
                state: "wi",
                zipcode: "53590",
                landmark_type: "River",
                regulation_type: "Trout Fishing",
                bag_limit: "5",
                min_size: "brook trout 8 inches, brown trout 10 inches, salmon 12 inches and rainbow trout 26 inches",
                release_only: "yes",
                other_restrictions: "5 trout and salmon in total, only 2 of which may be brown trout over 15 inches and only 1 of which may be a rainbow trout",
                open_season_start: "5/6/2017",
                open_season_end: "9/30/2017",
                regulation_year: "2017"
            },
            {
                // "_id": {
                //     "$oid": "59d07766734d1d42e49e1f1f"
                // },
                id: 4,
                name: "Bad River",
                coord: "",
                county: "Ashland",
                state: "wi",
                zipcode: "53590",
                landmark_type: "River",
                regulation_type: "Trout Fishing",
                bag_limit: "5",
                min_size: "brook trout 8 inches, brown trout 10 inches, salmon 12 inches and rainbow trout 26 inches",
                release_only: "yes",
                other_restrictions: "5 trout and salmon in total, only 2 of which may be brown trout over 15 inches and only 1 of which may be a rainbow trout",
                open_season_start: "5/6/2017",
                open_season_end: "9/30/2017",
                regulation_year: "2017"
            },
            {
                // "_id": {
                //     "$oid": "59d07766734d1d42e49e1f1f"
                // },
                id: 5,
                name: "Tyler Forks",
                coord: "",
                county: "Ashland",
                state: "wi",
                zipcode: "53590",
                landmark_type: "River",
                regulation_type: "Trout Fishing",
                bag_limit: "5",
                min_size: "brook trout 8 inches, brown trout 10 inches, salmon 12 inches and rainbow trout 26 inches",
                release_only: "yes",
                other_restrictions: "5 trout and salmon in total, only 2 of which may be brown trout over 15 inches and only 1 of which may be a rainbow trout",
                open_season_start: "5/6/2017",
                open_season_end: "9/30/2017",
                regulation_year: "2017"
            },
            {
                // "_id": {
                //     "$oid": "59d07766734d1d42e49e1f1f"
                // },
                id: 6,
                name: "Black River",
                coord: "",
                county: "Douglas",
                state: "wi",
                zipcode: "53590",
                landmark_type: "River",
                regulation_type: "Trout Fishing",
                bag_limit: "5",
                min_size: "brook trout 8 inches, brown trout 10 inches, salmon 12 inches and rainbow trout 26 inches",
                release_only: "yes",
                other_restrictions: "5 trout and salmon in total, only 2 of which may be brown trout over 15 inches and only 1 of which may be a rainbow trout",
                open_season_start: "5/6/2017",
                open_season_end: "9/30/2017",
                regulation_year: "2017"
            },
            {
                // "_id": {
                //     "$oid": "59d07766734d1d42e49e1f1f"
                // },
                id: 7,
                name: "Copper Creek",
                coord: "",
                county: "Douglas",
                state: "wi",
                zipcode: "53590",
                landmark_type: "Creek",
                regulation_type: "Trout Fishing",
                bag_limit: "5",
                min_size: "brook trout 8 inches, brown trout 10 inches, salmon 12 inches and rainbow trout 26 inches",
                release_only: "yes",
                other_restrictions: "5 trout and salmon in total, only 2 of which may be brown trout over 15 inches and only 1 of which may be a rainbow trout",
                open_season_start: "5/6/2017",
                open_season_end: "9/30/2017",
                regulation_year: "2017"
            }
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map