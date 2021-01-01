const app = Vue.createApp({
    // data, functions
    // template: '<h2>This is the template</h2>'
    data() {
        return {
            name: 'Thor',
            power: 'God of Thunder',
            weapon: 'Hammer'
        }
    }
});

app.mount("#app")