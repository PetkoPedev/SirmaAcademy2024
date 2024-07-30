class StringManipulator{
    constructor(){
        this.value = '';
    }

    setValue(value){
        this.value = value;
        return this;
    }
    
    toUpperCase(){
        this.value = this.value.toUpperCase();
        return this;
    }

    toLowerCase(){
        this.value = this.value.toLowerCase();
        return this;
    }

    print(){
        console.log(this.value);
        return this;
    }
}

const stringManipulator = new StringManipulator();
stringManipulator.setValue('Hello')
  .toUpperCase()
  .print()
  .toLowerCase()
  .print();

// HELLO
//  hello
