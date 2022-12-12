function valorcurso(){

    const select = document.getElementById('CARROS2');
   
    var t1 = document.getElementById("CARROS2").value;
   
    parcerla  = document.getElementById('parcela').value
    
    if(t1 == "Administração e gestão"){
         curso = 3000
     }
    
     if(t1 == "Construção civil"){
         curso = 3500
     }
    
     if(t1 == "Design de Mobiliário"){
         curso = 2500
     }
     
     if(t1 == "Design Gráfico"){
         curso = 1500
     }
     if(t1 == "Logística e transporte"){
         curso = 2000
    }
     if(t1 == "Metalurgica e soldagem"){
         curso = 3500
     }
     if(t1 == "Refrigeração e climatizacao"){
         curso = 2000
     }
     if(t1 == "Mecatronica"){
         curso = 2000
     }
     if(t1 == "Eletrica"){
         curso = 2500
     }
     if(t1 == "Desenvolvimento de sistemas"){
         curso = 3000
     }
   
     valor = curso/ parcerla

    document.getElementById('cursotitulo').textContent = "Você selecionou: " + t1;
   
    document.getElementById('cursobruto').textContent = "o valor total do curso escolhido é: " + curso;

   
    document.getElementById('total').textContent = "Total da parcela = R$" + valor;
     
   }