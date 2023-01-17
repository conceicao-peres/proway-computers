import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: IProdutoCarrinho[] = [];

  constructor() { }

  obtemCarrnho(){
    return JSON.parse(localStorage.getItem("carrinho") || "")
  }

  adicionarAoCarrinho(produto: IProdutoCarrinho){
    this.itens.push(produto)
    localStorage.setItem("carrinho", JSON.stringify(this.itens))
  }

  limparCarrinho(){
    this.itens = []
    localStorage.clear()
  }
}