import { FieldType } from "./FieldType";

export interface Field {
  id: string,
  type: FieldType | string,
  label: string,
  options?: string[]
}
