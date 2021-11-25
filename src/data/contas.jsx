export const contas = [
	{
		id:1,
		local: 'google.com',
		login: 'jaelsonjacinto@outlook.com',
		senha: 'senha'
	},
	{
		id:2,
		local: 'facebook.com',
		login: 'jaelsonjacinto@outlook.com',
		senha: 'senha2'
	},
	{
		id:3,
		local: 'figma.com.br',
		login: 'jaelsonjacinto@outlook.com',
		senha: 'senha3'
	}
];

export const contasFiltradas = (local) =>{
	contas.find(c => {c.local.includes(local)});
}