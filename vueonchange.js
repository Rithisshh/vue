const app = new Vue({
  el: '#app',
  data: {
    inputText: '',
  },
  methods: {
    handleChange() {
      console.log('Input changed:', this.inputText);
    }
  }
});
