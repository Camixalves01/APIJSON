//Método fetch() para buscar o arquivo dados.json transformando o resultado em objeto usando o metodo response.json 

fetch('dados.json')
    .then(response => response.json())
    .then(corpo => {

        //Acessando os dados do objeto JSON e adcionando ao HTML dentro de um elemento div usando a propriedade innerHTML (Front-End)

        document.getElementById('imagem').innerHTML = corpo.pop.image;
        document.getElementById('nome').innerHTML = corpo.pop.name;
        document.getElementById('disco').innerHTML = corpo.pop.album;
        document.getElementById('estilo').innerHTML = corpo.pop.style;
        document.getElementById('preco').innerHTML = corpo.pop.price;

        document.getElementById('imagem1').innerHTML = corpo.pop2.image;
        document.getElementById('nome1').innerHTML = corpo.pop2.name;
        document.getElementById('disco1').innerHTML = corpo.pop2.album;
        document.getElementById('estilo1').innerHTML = corpo.pop2.style;
        document.getElementById('preco1').innerHTML = corpo.pop2.price;
        
        document.getElementById('imagem2').innerHTML = corpo.pop3.image;
        document.getElementById('nome2').innerHTML = corpo.pop3.name;
        document.getElementById('disco2').innerHTML = corpo.pop3.album;
        document.getElementById('estilo2').innerHTML = corpo.pop3.style;
        document.getElementById('preco2').innerHTML = corpo.pop3.price;

        //selena

        document.getElementById('imagem11').innerHTML = corpo.pop11.image;
        document.getElementById('nome11').innerHTML = corpo.pop11.name;
        document.getElementById('disco11').innerHTML = corpo.pop11.album;
        document.getElementById('estilo11').innerHTML = corpo.pop11.style;
        document.getElementById('preco11').innerHTML = corpo.pop11.price;

        document.getElementById('imagem12').innerHTML = corpo.pop12.image;
        document.getElementById('nome12').innerHTML = corpo.pop12.name;
        document.getElementById('disco12').innerHTML = corpo.pop12.album;
        document.getElementById('estilo12').innerHTML = corpo.pop12.style;
        document.getElementById('preco12').innerHTML = corpo.pop12.price;
        
        document.getElementById('imagem23').innerHTML = corpo.pop13.image;
        document.getElementById('nome23').innerHTML = corpo.pop13.name;
        document.getElementById('disco23').innerHTML = corpo.pop13.album;
        document.getElementById('estilo23').innerHTML = corpo.pop13.style;
        document.getElementById('preco23').innerHTML = corpo.pop13.price;

    })