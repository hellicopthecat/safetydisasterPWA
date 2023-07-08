<!-- <template>
  <div>
    <canvas ref="chartCanvas" width="700" height="300"></canvas>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { Chart } from 'chart.js'

export default {
  props: {
    fcstTime: Array,
    temperature: Array
  },
  setup(props) {
    const chartCanvasRef = ref(null)

    onMounted(() => {
      const canvas = chartCanvasRef.value
      if (!canvas) return

      const ctx = canvas.getContext('2d')
      if (!ctx) return

      new Chart(ctx, {
        type: 'line',
        data: {
          labels: props.fcstTime,
          datasets: [
            {
              label: 'Temperature',
              data: props.temperature,
              backgroundColor: 'transparent',
              borderColor: 'tomato',
              borderWidth: 1
            }
          ]
        },
        options: {
          responsive: true,
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: 'fcstTime'
              }
            },
            y: {
              display: true,
              title: {
                display: true,
                text: 'Temperature'
              }
            }
          }
        }
      })
    })

    return {
      chartCanvasRef
    }
  }
}
</script>

<style>
canvas {
  max-width: 100%;
}
</style> -->
