interface Drivers {
  id: string;
  name: string;
  licenseNumber: string;
  licenseCategory: string;
  licenseExpiration: string;
}

export interface DriversProps {
  allDriversData: Drivers[];

  getAllDriversRequest: () => void;
}
