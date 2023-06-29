<script>
import papa from 'papaparse'
import axios from 'axios'
export default {
  data() {
    return {
      title: 'Safe Place'
    }
  },
  methods: {
    fetchData() {
      axios
        .get('/fulldata_safeplace.csv', { responseType: 'blob' })
        .then((response) => {
          const reader = new FileReader()
          reader.onload = () => {
            const text = reader.result
            papa.parse(text, { encoding: 'UTF-8' })
          }
          this.processCSVData(response.data, 'UTF-8')
        })
        .catch((err) => {
          console.log(err)
          throw err
        })
    },
    processCSVData(csvData) {
      papa.parse(csvData, {
        delimiter: ',',
        skipEmptyLines: true,
        complete: (results) => {
          console.log(results.data)
        },
        error: (err) => {
          console.log('Faile to parse CSV Data : ', err)
        }
      })
    }
  }
}
</script>
<template>
  <h1>{{ title }}</h1>
  <div>
    <h1>{{ title }}</h1>
    <button @click="fetchData">Fetch CSV Data</button>
  </div>
</template>
