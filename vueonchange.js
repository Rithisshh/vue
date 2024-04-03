const app = new Vue({
  el: '#app', // Mount Vue instance to the div with id "app"
  data: {
    inputText: '', // Initialize an empty inputText
  },
  methods: {
    handleChange() {
      // This method will be called when the input value changes
      console.log('Input changed:', this.inputText); // Log the input value to the console
    }
  }
});