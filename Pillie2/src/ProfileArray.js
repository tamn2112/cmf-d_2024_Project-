/*
**** Data Structure of this Application ****

1. Invariant: Array 
2. Search Key: username

*/

const Profile = require('./Profile.js');


class ProfileArray {
    constructor() {
        this.profiles = [];
    }

    // add new Profiles into array
    addProfile(profile) {
        this.profiles.push(profile);
        this.sortProfilesByUserName();
    }

    // get a profile
    getProfile(profile) {
        return this.profile;
    }

    // sort the profile array 
    sortProfilesByUsername() {
        this.profiles.sort((profile1, profile2) => {
          const username1 = profile1.getUsername();
          const username2 = profile2.getUsername();
    
          return username1.localeCompare(username2);
        });
        }
    

    // adding description for medication 
    // need another database to store the description? 

    // get total number of profile 
    getProfileCount() {
        return this.profiles.length;
    }

    // remove a profile 
    removeProfile(profile) {
        this.profiles.pop(profile);
    }
  

}

module.exports = ProfileArray;

