const app = Vue.createApp({
    // data, functions
    // template: '<h2>This is the template</h2>'
    data() {
        return {
            name: 'Thor',
            power: 'God of Thunder',
            weapon: 'Hammer',
            age: 30
        }
    },
    methods: {
        // changeName() {
        //     this.name = 'Name changed with method'
        // }
        changeName(name) {
            this.name = name
        }
    }
});

app.mount("#app")