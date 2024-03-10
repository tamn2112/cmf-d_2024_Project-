const Profile = require('./Profile.js');
let profileArray = require('./ProfileArray.js')


// Create a profileArray

profileArray = new profileArray();

// Adding profiles 

profileArray.addProfile(new Profile("John", "30", "M", "he/him", "john123", "Seraquel", "1"));
profileArray.addProfile(new Profile("Jane", "16", "F", "she/her", "jane99", "Vicodine", "1"));
profileArray.addProfile(new Profile("Alice", "25", "NB", "they/them", "100allie", "@12alice", '3'));


// Iterate over profiles using for...of loop
for (const profile of profileArray.getProfiles()) {
    console.log("Profile:", profile.getName(), profile.getAge(), profile.getGender(), profile.getUsername());
}






