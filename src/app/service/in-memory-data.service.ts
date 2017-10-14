import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {
        // "_id": {
        //     "$oid": "59d07766734d1d42e49e1f1f"
        // },
        id:  1,
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
      id:  1,
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
    id:  2,
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
  id:  3,
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
  id:  4,
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
  id:  5,
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
  id:  6,
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
  id:  7,
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
      // { id: 0,  name: 'Zero' },
      // { id: 11, name: 'Mr. Nice' },
      // { id: 12, name: 'Narco' },
      // { id: 13, name: 'Bombasto' },
      // { id: 14, name: 'Celeritas' },
      // { id: 15, name: 'Magneta' },
      // { id: 16, name: 'RubberMan' },
      // { id: 17, name: 'Dynama' },
      // { id: 18, name: 'Dr IQ' },
      // { id: 19, name: 'Magma' },
      // { id: 20, name: 'Tornado' }
    ];
    return {heroes};
  }
}