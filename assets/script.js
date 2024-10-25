let endpoint = "https://raw.githubusercontent.com/guilhermeonrails/api-frontend/main/produtos.json"
let produtos = []
let elementoParaInserirProdutos = document.getElementById('produtos-lista');
buscarProdutosDaAPI()

async function buscarProdutosDaAPI() {
	let res = await fetch(endpoint);
	let produtos = await res.json();
	// console.table(produtos);
	exibirProdutos(produtos)
}

function exibirProdutos(produtos) {
	produtos.forEach(produto => {
		elementoParaInserirProdutos.innerHTML += `
			<li class="flex flex-col items-start rounded-xl overflow-hidden shadow-2xl">
					<img class="w-full" src="${produto.img}" alt="${produto.nome}" />
					<div class="p-5 bg-zinc-100 w-full flex flex-col gap-2.5 justify-between h-full">
						<div class="flex flex-col gap-2.5">
							<h3 class="text-xl">${produto.nome}</h3>
							<div>
								<h4>R$${produto.valorComDesconto} <s class="pf-2.5 text-sm text-zinc-400">R$${produto.valorSemDesconto}</s></h4>
								<p>${produto.descricao}</p>
								<p class="text-sm"><strong>Tipo de entrega:</strong> ${produto.tipoEntrega}</p>
							</div>
						</div>
						<button class="hover:opacity-80 transition-opacity p-2.5 rounded-md text-white bg-[#0d3db2]">Comprar agora</button>
					</div>
				</li>
		`;
	})
}