import { AssetType } from "./AssetType";

export type Asset = {
  id?: number;
  name: string;
  type: AssetType;
  serialNumber?: string;
  value: number;
  price: number;
  owned: boolean;
  dateCreated: Date;
  dateModified: Date;
};
