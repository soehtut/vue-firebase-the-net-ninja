const app = Vue.createApp({
    // data, functions
    // template: '<h2>This is the template</h2>'
    data() {
        return {
            name: 'Thor',
            power: 'God of Thunder',
            weapon: 'Hammer',
            age: 30,
            isAvenger: true
        }
    },
    methods: {
        toggleAvenger() {
            this.isAvenger = !this.isAvenger
        }
    }
});

app.mount("#app")