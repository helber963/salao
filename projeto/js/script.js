    let listaServicos = [
        {
            imagem: '<div class="card-services"><img src="img/scissors-round.jpg" alt="Corte" >',
            titulo: "CORTE",
            descricao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero natus fugiat maxime.",
            valor: "R$XX.XX"
        },
        {
            imagem: '<img src="img/cream-round.png" alt="Hidratação" >',
            titulo: "HIDRATAÇÃO",
            descricao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero natus fugiat maxime.",
            valor: "R$XX.XX"
        },
        {
            imagem: '<img src="img/nails-round.png" alt="Unhas" >',
            titulo: "UNHAS",
            descricao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero natus fugiat maxime.",
            valor: "R$XX.XX"
        },
        {
            imagem: '<img src="img/skincare-round.png" alt="Skincare" >',
            titulo: "SKINCARE",
            descricao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero natus fugiat maxime.",
            valor: "R$XX.XX"
        },
    ]


    function renderizarServicos(){
        let espaco = document.getElementById("espaco-servicos")

        let template = "";

        for(let index =0; index < listaServicos.length; index++){
            const servico = listaServicos[index];
            
            template += `<div class="card-servicos "></div><div class="card-services">${servico.imagem}
            <h2>${servico.titulo}</h2>
            <p>${servico.descricao}</p>
            <h2>${servico.valor}</h2>
        </div></div>`
        }
        espaco.innerHTML = template;





    }
