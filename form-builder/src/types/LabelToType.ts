import { FieldType } from "./FieldType"

export const labelType: Record<string, FieldType> = {
  'Text Input': FieldType.Text,
  'Date Picker': FieldType.Date,
  'Dropdown': FieldType.Dropdown,
}

export const typeLabel: Record<FieldType, string> = {
  [FieldType.Text]: 'Text Input',
  [FieldType.Date]: 'Date Picker',
  [FieldType.Dropdown]: 'Dropdown',
}

