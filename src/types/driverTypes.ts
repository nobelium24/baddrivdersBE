export type Driver = {
    driverName: string;
    carModel: string;
    plateNumber: string;
    complaints: string[];
    picture: string;
    save: () => Promise<unknown>;
}