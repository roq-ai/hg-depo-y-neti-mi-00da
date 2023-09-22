import { GetQueryInterface } from 'interfaces';

export interface InventoryInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  name_at?: string;
  price_at?: number;

  _count?: {};
}

export interface InventoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  name_at?: string;
}
