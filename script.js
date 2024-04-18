const obterTemp = () => {
  const chave = "777fd6c175f16899b669ab9b22be7638";
  const cidade = document.getElementById("cidadeInput").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&lang=pt_br&appid=${chave}&units=metric`;

  fetch(url)
    .then((resposta) => {
      if (!resposta.ok) {
        throw new Error("Cidade não encontrada");
      }
      return resposta.json();
    })
    .then((dados) => {
      const temperatura = dados.main.temp;
      const descricao = dados.weather[0].description;
      const resultado = document.getElementById("resultado");
      resultado.innerHTML = `<p>Temperatura em ${cidade}: ${temperatura}°C (${descricao})</p>`;
    })
    .catch((erro) => {
      const resultado = document.getElementById("resultado");
      resultado.innerHTML = `<p>${erro.message}</p>`;
    });
};
