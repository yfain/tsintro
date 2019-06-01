export interface MotorVehicle {
    startEngine(): boolean;      
    stopEngine(): boolean;       
    brake(): boolean;            
    accelerate(speed: number);   
    honk(howLong: number): void; 
}