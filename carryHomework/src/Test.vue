<template>
  <div id="test">
    <h1>Bitcoin Price Index</h1>
    <section v-if="errored">
      <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>
    <div
      v-for="currency in info"
      :key="currency"
      class="currency"
    >
      {{ currency.description }}:
      <span class="lighten">
        <span v-html="currency.symbol"></span>{{ currency.rate_float | currencydecimal }}
      </span>
    </div>
  </div>
</template>


<script>
import HelloWorld from './components/HelloWorld'
import axios from 'axios'

export default {
  name: 'Test',
  data(){
    return{
      info:null,
      loading:true,
      errored:false
    }
  },
  components: {
    HelloWorld
  },
  methods: {

  },
  mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => {
        this.info = response.data.bpi
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() =>this.loading = false)
  },
  filters: {
    currencydecimal (value) {
      return value.toFixed(2)
    }
  }
}
</script>

<style>

</style>
