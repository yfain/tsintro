import { MotorVehicle } from './motor-vehicle';

export interface Flyable extends MotorVehicle {
    fly(howHigh: number);
    land();
  }