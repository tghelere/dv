new Vue({
    el: '#desafio',
    data: {
        nome: 'Thyago',
        idade: 30,
        image: 'https://techcrunch.com/wp-content/uploads/2018/07/logo-2.png?w=300'
    },
    methods: {
        generateNumber(){
            return Math.random()
        }

    }
})