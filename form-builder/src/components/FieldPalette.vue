<template>
  <div class="space-y-2 bg-gray-100 border-r-1 border-gray-300">
    <h2 class="text-2xl py-2 px-3 font-bold">Field Palette</h2>
    <div class="px-5 flex flex-col gap-3">
      <FieldButton label="Text Input" @on:add:field="handleAddField" />
      <FieldButton label="Date Picker" @on:add:field="handleAddField" />
      <FieldButton label="Dropdown" @on:add:field="handleAddField" />

      <button
      class="w-full bg-green-100 border border-gray-400 rounded text-center py-2 px-4 hover:bg-green-200 cursor-pointer"
      @click="addCustomField"
      >
      + Add Custom Field
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import FieldButton from './FieldButton.vue'
import { FieldType } from '@/types/FieldType'
import { defineEmits } from 'vue'

const emit = defineEmits<{
  (e: 'on:add:field', type: FieldType | string): void
}>()

function handleAddField(type: FieldType | string) {
  console.log(type)
  emit('on:add:field', type)
}

function addCustomField() {
  const customLabel = prompt('Enter custom field label: ')
  if (customLabel && customLabel.trim() !== '') {
    emit('on:add:field', customLabel.trim())
  }
}
</script>
