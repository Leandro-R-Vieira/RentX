import { CarDTO } from "../dtos/CarDTO";

export type RentxRoutesList = {
  Home: undefined;  
  CarDetails: undefined;
  Scheduling: {
    car: CarDTO;
  };
  SchedulingDetails: {
    car: CarDTO;
    dates: string[];
  };
  SchedulingComplete: undefined;
  MyCars: undefined;
  Splash: undefined;
}