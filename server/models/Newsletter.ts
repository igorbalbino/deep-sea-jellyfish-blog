class Newsletter {
    nome: string = ''
    email: string = ''
    ativo: boolean = false

    constructor (nome: string, email: string, ativo: boolean) {
        this.nome = nome;
        this.email = email;
        this.ativo = ativo;
    }
    toString() {
        return this.nome + ', ' + this.email + ', ' + this.ativo;
    }
}

// Firestore data converter
// const cityConverter = {
//     toFirestore: (city) => {
//         return {
//             name: city.nome,
//             state: city.state,
//             country: city.country
//             };
//     },
//     fromFirestore: (snapshot, options) => {
//         const data = snapshot.data(options);
//         return new Newsletter(data.name, data.state, data.country);
//     }
// };