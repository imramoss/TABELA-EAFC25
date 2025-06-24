// Substituir dados antigos no localStorage
const novosDados = [
  {
    time: "André",
    pontos: 0,
    jogos: 0,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    golsPro: 0,
    golsContra: 0,
    amarelos: 0,
    vermelhos: 0
  },
  {
    time: "Davizão",
    pontos: 0,
    jogos: 0,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    golsPro: 0,
    golsContra: 0,
    amarelos: 0,
    vermelhos: 0
  },
  {
    time: "Gabriel",
    pontos: 0,
    jogos: 0,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    golsPro: 0,
    golsContra: 0,
    amarelos: 0,
    vermelhos: 0
  },
  {
    time: "Jão",
    pontos: 0,
    jogos: 0,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    golsPro: 0,
    golsContra: 0,
    amarelos: 0,
    vermelhos: 0
  },
  {
    time: "Haaland Moreno",
    pontos: 0,
    jogos: 0,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    golsPro: 0,
    golsContra: 0,
    amarelos: 0,
    vermelhos: 0
  },
  {
    time: "Samuel",
    pontos: 0,
    jogos: 0,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    golsPro: 0,
    golsContra: 0,
    amarelos: 0,
    vermelhos: 0
  }
];

localStorage.setItem("tabelaFifa", JSON.stringify(novosDados));

// Simples autenticação (substitua por sistema seguro se necessário)
const userValido = 'admin';
const senhaValida = '1234';

// Mock do banco (ou substitua por Supabase/API real)
let dadosTimes = [
  { nome: "Andre", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, amarelos: 0, vermelhos: 0 },
  { nome: "Davizao", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, amarelos: 0, vermelhos: 0 },
  { nome: "Gabriel", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, amarelos: 0, vermelhos: 0 },
  { nome: "Haaland Moreno", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, amarelos: 0, vermelhos: 0 },
  { nome: "Jao", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, amarelos: 0, vermelhos: 0 },
  { nome: "Samuel", pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, amarelos: 0, vermelhos: 0 }
];

function login() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const msg = document.getElementById('login-msg');

  if (username === userValido && password === senhaValida) {
    document.getElementById('login').style.display = 'none';
    document.getElementById('admin-panel').style.display = 'block';
    carregarTabela();
  } else {
    msg.textContent = 'Usuário ou senha inválidos.';
  }
}

function carregarTabela() {
  const tbody = document.querySelector('#admin-table tbody');
  tbody.innerHTML = '';

  dadosTimes.forEach((time, index) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${time.nome}</td>
      <td><input type="number" value="${time.pontos}" data-index="${index}" data-field="pontos" /></td>
      <td><input type="number" value="${time.jogos}" data-index="${index}" data-field="jogos" /></td>
      <td><input type="number" value="${time.vitorias}" data-index="${index}" data-field="vitorias" /></td>
      <td><input type="number" value="${time.empates}" data-index="${index}" data-field="empates" /></td>
      <td><input type="number" value="${time.derrotas}" data-index="${index}" data-field="derrotas" /></td>
      <td><input type="number" value="${time.golsPro}" data-index="${index}" data-field="golsPro" /></td>
      <td><input type="number" value="${time.golsContra}" data-index="${index}" data-field="golsContra" /></td>
      <td>
        <span style="display: inline-flex; align-items: center; gap: 5px;">
          <span style="width: 14px; height: 18px; background: gold; display: inline-block; border-radius: 2px;"></span>
          <input type="number" value="${time.amarelos}" data-index="${index}" data-field="amarelos" style="width: 40px;" />
        </span>
      </td>
      <td>
        <span style="display: inline-flex; align-items: center; gap: 5px;">
          <span style="width: 14px; height: 18px; background: red; display: inline-block; border-radius: 2px;"></span>
          <input type="number" value="${time.vermelhos}" data-index="${index}" data-field="vermelhos" style="width: 40px;" />
        </span>
      </td>
    `;
    tbody.appendChild(tr);
  });

  document.querySelectorAll('#admin-table input').forEach(input => {
    input.addEventListener('input', atualizarValor);
  });
}

function atualizarValor(event) {
  const index = event.target.getAttribute('data-index');
  const field = event.target.getAttribute('data-field');
  const valor = parseInt(event.target.value, 10);
  dadosTimes[index][field] = isNaN(valor) ? 0 : valor;
}

function salvarDados() {
  // Aqui você pode integrar com Supabase, salvar em JSON, etc.
  console.log("Dados salvos:", dadosTimes);

  const msg = document.getElementById('save-msg');
  msg.textContent = "Alterações salvas com sucesso!";
  setTimeout(() => msg.textContent = '', 3000);
}
