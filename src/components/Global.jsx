import React, { useState, createContext, useEffect } from 'react';
import { contas as cc}  from '../data/contas';

const ContextVars = createContext();

const GlobalContext = (self) =>{
	const [accounts, setContas] = useState([]);

	const contasFiltradas = (filtro, lista) =>{
		let temp = lista;
		return temp.filter(c => { return c.local.includes(filtro) });
	}

	const setAccounts = (entrada) =>{
		setContas(entrada);
		localStorage.setItem('accounts', JSON.stringify(entrada));
	}

	useEffect(() =>{
		let contas = localStorage.getItem('accounts');
		setAccounts((contas != null ? JSON.parse(contas) : cc));
	}, []);

	return (
		<ContextVars.Provider value={{accounts, setAccounts, contasFiltradas}}>
			{self.children}
		</ContextVars.Provider>
	);
}

export {GlobalContext, ContextVars};