
alert("boas vindas ao nosso jogo")
var numeroSecreto = parseInt(Math.random() * 10 );
var tentativas = 1;
console.log(numeroSecreto)
while(chuteEscolhido != numeroSecreto )
    {

            var chuteEscolhido = prompt(" escholha um numero")
          

            if( chuteEscolhido == numeroSecreto ){
                break;

            }else{

            if(chuteEscolhido < numeroSecreto )
                alert(" voce errou seu chute foi menor que o numero secreto ");

            }
            
            if(chuteEscolhido > numeroSecreto){
                alert("voce errou seu chute foi maior que i nuemro secreto");

            }
    }  
    
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; 
    alert(" voce acertou com " + tentativa  +  palavraTentativa );
    
    // Operador ternario

     // if( tentativa > 1 ){
    // alert(" voce acertou com " + tentativa + " tentativas");     
    // 
    // }else{

    //    alert(" voce acertou com " + tentativa + " tentativa");    
    //}
