// To parse this data:
//
//   import { Convert } from "./file";
//
//   const receipt = Convert.toReceipt(json);

export interface Receipt {
  ref_id:      number;
  date_time:   string;
  table_id:    number;
  total_price: number;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toReceipt(json: string): Receipt[] {
      return JSON.parse(json);
  }

  public static receiptToJson(value: Receipt[]): string {
      return JSON.stringify(value);
  }
}
