import type { Field } from '@/types/Field'
import { FieldType } from '@/types/FieldType'
import { typeLabel } from '@/types/LabelToType'
import { ref } from 'vue'

export function useFormFields() {
  const fields = ref<Field[]>([])

  function addField(type: FieldType | string) {
    const fieldLabel = typeLabel[type as keyof typeof typeLabel] ?? type
    const field: Field = {
      id: crypto.randomUUID(),
      type: type,
      label: `New ${fieldLabel}`,
    }

    if (type === FieldType.Dropdown) {
      field.options = []
    }

    fields.value.push(field)
  }

  function removeField(index: number) {
    fields.value.splice(index, 1)
  }

  return {
    fields,
    addField,
    removeField
  }
}
