export interface WeatherReport {
    coord: Object;
    weather: Object[];
    base: string;
    main: Object;
    visibility: number;
    wind: Object;
    clouds: Object;
    dt: number;
    id: number;
    name: string;
    cod: number;
}