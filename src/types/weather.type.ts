export interface Temperature {
  value: number;
  unit: string;
}

export interface WindSpeed {
  value: number;
  unit: string;
}

export interface Humidity {
  value: number;
  unit: string;
}

export interface CurrentConditions {
  datetime: string;
  condition: string;
  conditionKey: string;
  temperature: Temperature;
  windSpeed: WindSpeed;
  humidity: Humidity;
  icon: string;
  iconBig: string;
}

export interface Temperature2 {
  min: number;
  max: number;
  unit: string;
}

export interface Temperature3 {
  value: number;
  unit: string;
}

export interface WindSpeed2 {
  value: number;
  unit: string;
}

export interface Humidity2 {
  value: number;
  unit: string;
}

export interface Hourly {
  datetime: string;
  condition: string;
  conditionKey: string;
  temperature: Temperature3;
  windSpeed: WindSpeed2;
  humidity: Humidity2;
  icon: string;
}

export interface Next5DaysConditions {
  date: string;
  condition: string;
  conditionKey: string;
  icon: string;
  iconBig: string;
  temperature: Temperature2;
  hourly: Hourly[];
}

export interface Weather {
  dataProvider: string;
  currentConditions: CurrentConditions;
  next5DaysConditions: Next5DaysConditions[];
}
