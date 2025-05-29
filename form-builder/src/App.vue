<template>
  <div class="grid grid-cols-3 gap-4 h-screen">
    <FieldPalette @on:add:field="addField" />
    <FormBuilder :fields="fields" @on:remove:field="removeField" />
    <JSONPreview :fields="fields" />
  </div>
</template>

<script setup lang="ts">
import FieldPalette from './components/FieldPalette.vue'
import FormBuilder from './components/FormBuilder.vue'
import JSONPreview from './components/JSONPreview.vue'
import { useFormFields } from './services/FieldService'

const { fields, addField, removeField } = useFormFields()
</script>
