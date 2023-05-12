export default class Car {
    FirstName = null;
    LastName = "";
 
    constructor(params = null) 
    {
        if (params) {
            this.FirstName = params.FirstName;
            //   this.LastName = lname;
        }

    }
    getFullName()
    {
      return this.FirstName+' '+ this.LastName;
    }
    getFirstName()
    {
      return this.FirstName;
    }
    getLastName()
    {
      return this.LastName;
    }        
}