import { Flyable } from './flyable';
import {Swimmable} from './swimmable';

class SecretServiceCar implements Flyable, Swimmable {

    startEngine(): boolean { 
      return true;
    };
    stopEngine(): boolean{  
      return true;
    };
    brake(): boolean {   
      return true;
    };
    accelerate(speed: number) {  
      console.log(`Driving faster`);
    }
  
    honk(howLong: number): void { 
      console.log(`Beep beep yeah!`);
    }
  
    fly(howHigh: number) {  
      console.log(`Flying ${howHigh} feet high`);
    }
  
    land() {  
      console.log(`Landing. Fasten your belts.`);
    }
  
    swim(howFar: number) {  
      console.log(`Swimming ${howFar} feet`);
    }
  }