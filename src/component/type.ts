export type CountryDetails {
    name?:         Name;
    tld?:          string[];
    cca2?:         string;
    ccn3?:         string;
    cca3?:         string;
    cioc?:         string;
    independent?:  boolean;
    status?:       Status;
    unMember?:     boolean;
    currencies?:   { [key: string]: Currency };
    idd?:          Idd;
    capital?:      string[];
    altSpellings?: string[];
    region?:       Region;
    subregion?:    string;
    languages?:    { [key: string]: string };
    translations?: { [key: string]: Translation };
    latlng?:       number[];
    landlocked?:   boolean;
    area?:         number;
    demonyms?:     Demonyms;
    flag?:         string;
    maps?:         Maps;
    population?:   number;
    fifa?:         string;
    car?:          Car;
    timezones?:    string[];
    continents?:   Continent[];
    flags?:        Flags;
    coatOfArms?:   CoatOfArms;
    startOfWeek?:  StartOfWeek;
    capitalInfo?:  CapitalInfo;
    borders?:      string[];
    gini?:         { [key: string]: number };
    postalCode?:   PostalCode;
};
