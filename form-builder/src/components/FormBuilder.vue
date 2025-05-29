<template>
  <div class="max-w-4xl">
    <h2 class="text-2xl py-2 px-3 font-bold">Form Builder</h2>
    <div
      v-for="(field, fieldIndex) in props.fields"
      :key="field.id"
      class="flex flex-col md:flex-row md:justify-between md:items-center gap-4 my-2 border p-2"
    >
      <div class="flex-1">
        {{ field.label }}
      </div>
      <ul v-if="field.options?.length !== 0" class="flex-1 flex flex-wrap gap-2">
        <li
          v-for="(option, optionIndex) in field.options"
          :key="optionIndex"
          class="relative group bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center"
        >
          {{ option }}
          <button
            class="ml-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-150 cursor-pointer"
            @click="removeOption(fieldIndex, optionIndex)"
          >
            ✕
          </button>
        </li>
      </ul>
      <div class="flex flex-wrap gap-2">
        <button
          v-if="field.type === FieldType.Dropdown"
          class="bg-green-600 text-white px-2 rounded cursor-pointer"
          @click="addOption(fieldIndex)"
        >
          Add Option
        </button>
        <button
          class="bg-red-500 text-white px-2 rounded cursor-pointer"
          @click="emit('on:remove:field', fieldIndex)"
        >
          Remove
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Field } from '@/types/Field'
import { FieldType } from '@/types/FieldType'
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
  fields: Field[]
}>()

const emit = defineEmits<{
  (e: 'on:remove:field', index: number): void
}>()

function addOption(fieldIndex: number) {
  const optionName = prompt('Enter option name: ')
  const field = props.fields[fieldIndex]

  if (field.type === FieldType.Dropdown && optionName && optionName.trim() !== '') {
    if (!field.options) {
      field.options = []
    }

    field.options.push(`Option ${optionName}`)
  }
}

function removeOption(fieldIndex: number, optionIndex: number) {
  const field = props.fields[fieldIndex]

  if (field.type === FieldType.Dropdown) {
    if (field.options) field.options.splice(optionIndex, 1)
  }
}
</script>
