// covid라는 api의 특정 도메인
export interface Country {
  Country: string;
  CountryCode: string;
  Date: Date;
  NewConfiremd: number;
  NewDeaths: number;
  NewRecovered: number;
  premium: any;
  Slug: string;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}
interface Global {
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}
export interface CovidSummaryResponse {
  Countries: Country[];
  Date: string;
  Global: Global;
  Message: string;
}
export interface CountrySummaryInfo {
  Cases: number;
  City: string;
  CityCode: string;
  Country: string;
  CountryCode: string;
  Date: Date;
  Lat: string;
  Lon: string;
  Province: string;
  Status: string;
}
export type CountrySummaryResponse = CountrySummaryInfo[];
