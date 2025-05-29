<template>
  <button
    class="w-full bg-gray-100 border border-gray-400 rounded text-center py-2 px-4 hover:bg-gray-200 cursor-pointer"
    @click="emitAddField"
  >
    {{ props.label }}
  </button>
</template>
<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { FieldType } from '@/types/FieldType'
import { labelType } from '@/types/LabelToType'

const props = defineProps<{
  label: string
}>()

const emit = defineEmits<{
  (e: 'on:add:field', type: FieldType | string): void
}>()

function emitAddField() {
  const fieldType = labelType[props.label]
  emit('on:add:field', fieldType)
}
</script>
