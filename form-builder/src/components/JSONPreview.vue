<template>
  <div class="bg-gray-100 border-l-1 border-gray-300 max-w-5xl px-4">
    <h2 class="text-2xl py-4 px-3 font-bold">JSON Schema Preview</h2>

    <div class="overflow-auto rounded border bg-white p-4">
      <pre class="text-sm whitespace-pre-wrap break-words"
        >{{ formatted }}
      </pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Field } from '@/types/Field'

const props = defineProps<{
  fields: Field[]
}>()

const formatted = computed(() => JSON.stringify(props.fields, null, 2))
</script>
