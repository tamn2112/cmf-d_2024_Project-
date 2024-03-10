/* 
*
****** Profile of users ******
1. name
2. userName
3. age
4. gender
5. pronouns
6. medication 
7. dose usage 
*/

class Profile {
    constructor (name, age, gender, pronouns, username, medication, doseUsage, region) {
        // Private members 
        let _name = name;
        let _age =  age;
        let _gender = gender;
        let _pronouns = pronouns;
        let _username = username;
        let _medication = medication;
        let _doseUsage = doseUsage;
        let _region = region;



        // Public method for getters
        this.getName() = () => _name;
        this.getUserName() = ()=> _username;
        this.getGender() = ()=> _gender;
        this.getPronouns() = ()=> _pronouns;
        this.getMedication() = ()=> _medication;
        this.getDoseUsage = ()=> _doseUsage;
        this.getRegion = () => _region;


        // Public Method for setters
        this.setName = (newName) => { _name = newName; };
        this.setUserName = (newUserName) => {_username = newUserName};
        this.setGender = (newGender) => {_gender = newGender};
        this.setPronouns = (newPronouns) => {_pronouns = newPronouns};
        this.setMedication = (newMedication) => {_medication = newMedication};
        this.setDoseUsage = (newDoseUsage) => {_doseUsage = newDoseUsage};
        this.setRegion = (newRegion) => {_region = newRegion};

    }
}