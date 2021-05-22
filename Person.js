class Person {
    constructor(){
      this.index = null;
      this.name = null;
    }
  
    getCount(){
      var personCountRef = database.ref('personCount');
     personCountRef.on("value",function(data){
       personCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        personCount: count
      });
    }
  
    update(){
      var personIndex = "persons/person" + this.index;
      database.ref(personIndex).set({
        name:this.name,
        distance:this.distance
      });
    }
  
    static getpersonInfo(){
      var personInfoRef=database.ref("persons");
      personInfoRef.on("value",function(data){
        allpersons = data.val();
      })
    }
  }
  