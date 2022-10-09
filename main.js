const adviceButton = document.getElementById('button-advice');
const adviceContent = document.getElementById('advice');
const idContent = document.getElementById('number-advice');

adviceButton.addEventListener('click', (e) => {
    fetch('https://api.adviceslip.com/advice', {
        method: 'GET'
    }) 
        .then(function(response){
            if(!response.ok) throw new Error('Erro ao executar a requisição!')
            return response.json();
        })
        .then(function(data){
            const advice = data.slip.advice;
            const id = data.slip.id;
            
            idContent.innerHTML = id;
            adviceContent.innerHTML = `"${advice}"`;        
        })
        .catch(function(err){
            idContent.innerHTML = 'error';
            adviceContent.innerHTML = err;
        });
})

adviceButton.click();