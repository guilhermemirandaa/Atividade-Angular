<template>
  <div class="progress">
    <div class="progress-header">
      <span>{{ label }}</span>
      <span>{{ percentual }}%</span>
    </div>
    <div
      class="progress-track"
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      :aria-valuenow="percentual"
      :aria-label="label"
    >
      <div class="progress-fill" :style="{ width: percentual + '%' }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    valor: { type: Number, default: 0 },
    label: { type: String, default: '' },
  },
  computed: {
    percentual() {
      return Math.min(100, Math.max(0, this.valor))
    },
  },
}
</script>
