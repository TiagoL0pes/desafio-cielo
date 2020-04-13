import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ControleLancamento } from 'src/app/shared/models/controle-lancamento';
import { ExtratoLancamentoContaService } from 'src/app/shared/services/extrato-lancamento-conta.service';

@Component({
  selector: 'app-lancamento-conta',
  templateUrl: './lancamento-conta.component.html',
  styleUrls: ['./lancamento-conta.component.scss']
})
export class LancamentoContaComponent implements OnInit {
  id: number;
  acao: string;
  lancamento: ControleLancamento = new ControleLancamento();
  lancamentoForm: FormGroup;
  subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private service: ExtratoLancamentoContaService
  ) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.params['id']);
    this.acao = this.gerarTextoAcaoBotao();
    this.lancamentoForm = this.criarFormulario();
    if (this.id === 1 || this.id === 25) {
      const lancamento$ = this.service.detalhar(this.id)
        .subscribe(lancamento => this.atualizarFormulario(lancamento),
          error => console.error(error));

      this.subscriptions.push(lancamento$);
    } else {
      const lancamento = this.buscarLancamentoEmMemoria();
      if (lancamento) {
        this.atualizarFormulario(lancamento);
      }
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  criarFormulario(): FormGroup {
    return this.formBuilder.group({
      numeroRemessaBanco: ['', Validators.required],
      nomeSituacaoRemessa: ['', Validators.required],
      codigoBanco: ['', Validators.required],
      numeroAgencia: ['', Validators.required],
      numeroContaCorrente: ['', Validators.required],
      nomeBanco: ['', Validators.required],
      numeroRaizCNPJ: ['', Validators.required],
      numeroSufixoCNPJ: ['', Validators.required],
      descricaoGrupoPagamento: ['', Validators.required],
      numeroEvento: ['', Validators.required],
      nomeTipoOperacao: ['', Validators.required],
      quantidadeLancamentoRemessa: ['', Validators.required],
      valorLancamentoRemessa: ['', Validators.required],
      dataLancamentoContaCorrenteCliente: ['', Validators.required],
      dataEfetivaLancamento: ['', Validators.required]
    });
  }

  atualizarFormulario(lancamento): void {
    this.lancamento = lancamento;
    Object.keys(this.lancamentoForm.controls).forEach(key => {
      this.lancamentoForm.controls[key].setValue(this.lancamento[key]);
    });

    this.lancamentoForm.controls['numeroRemessaBanco'].setValue(this.lancamento.lancamentoContaCorrenteCliente.numeroRemessaBanco);
    this.lancamentoForm.controls['nomeSituacaoRemessa'].setValue(this.lancamento.lancamentoContaCorrenteCliente.nomeSituacaoRemessa);
    this.lancamentoForm.controls['codigoBanco'].setValue(this.lancamento.lancamentoContaCorrenteCliente.dadosDomicilioBancario.codigoBanco);
    this.lancamentoForm.controls['numeroAgencia'].setValue(this.lancamento.lancamentoContaCorrenteCliente.dadosDomicilioBancario.numeroAgencia);
    this.lancamentoForm.controls['numeroContaCorrente'].setValue(this.lancamento.lancamentoContaCorrenteCliente.dadosDomicilioBancario.numeroContaCorrente);
    this.lancamentoForm.controls['nomeTipoOperacao'].setValue(this.lancamento.lancamentoContaCorrenteCliente.nomeTipoOperacao);
    this.lancamentoForm.controls['dataLancamentoContaCorrenteCliente'].setValue(new Date(this.converterDataENG(this.lancamento.dataLancamentoContaCorrenteCliente)));
    this.lancamentoForm.controls['dataEfetivaLancamento'].setValue(new Date(this.converterDataENG(this.lancamento.dataEfetivaLancamento)));
  }

  gerarTextoAcaoBotao(): string {
    if (this.id) {
      return 'Alterar';
    } else {
      return 'Salvar';
    }
  }

  gerarMensagemToast(mensagem) {
    this.snackBar.open(mensagem, 'Ok', {
      verticalPosition: 'top',
      duration: 3000
    });
  }

  saveOrUpdate() {
    const lancamento = this.gerarLancamento();
    if (this.acao.toLowerCase() === 'salvar') {
      this.salvarLancamento(lancamento);
      this.gerarMensagemToast('Lançamento salvo com sucesso');
    } else {
      this.atualizarLancamento(lancamento);
      this.gerarMensagemToast('Lançamento alterado com sucesso');
    }

    this.router.navigate(['extrato', 'lancamentos']);
  }

  gerarLancamento(): ControleLancamento {
    const lancamento: ControleLancamento = new ControleLancamento();
    lancamento.lancamentoContaCorrenteCliente.numeroRemessaBanco = this.lancamentoForm.get('numeroRemessaBanco').value;
    lancamento.lancamentoContaCorrenteCliente.nomeSituacaoRemessa = this.lancamentoForm.get('nomeSituacaoRemessa').value;
    lancamento.lancamentoContaCorrenteCliente.dadosDomicilioBancario.codigoBanco = this.lancamentoForm.get('codigoBanco').value;
    lancamento.lancamentoContaCorrenteCliente.dadosDomicilioBancario.numeroAgencia = this.lancamentoForm.get('numeroAgencia').value;
    lancamento.lancamentoContaCorrenteCliente.dadosDomicilioBancario.numeroContaCorrente = this.lancamentoForm.get('numeroContaCorrente').value;
    lancamento.nomeBanco = this.lancamentoForm.get('nomeBanco').value;
    lancamento.numeroRaizCNPJ = this.lancamentoForm.get('numeroRaizCNPJ').value;
    lancamento.numeroSufixoCNPJ = this.lancamentoForm.get('numeroSufixoCNPJ').value;
    lancamento.descricaoGrupoPagamento = this.lancamentoForm.get('descricaoGrupoPagamento').value;
    lancamento.numeroEvento = this.lancamentoForm.get('numeroEvento').value;
    lancamento.lancamentoContaCorrenteCliente.nomeTipoOperacao = this.lancamentoForm.get('nomeTipoOperacao').value;
    lancamento.quantidadeLancamentoRemessa = this.lancamentoForm.get('quantidadeLancamentoRemessa').value;
    lancamento.valorLancamentoRemessa = this.lancamentoForm.get('valorLancamentoRemessa').value;
    lancamento.dataLancamentoContaCorrenteCliente = this.formatarData(this.lancamentoForm.get('dataLancamentoContaCorrenteCliente').value);
    lancamento.dataEfetivaLancamento = this.formatarData(this.lancamentoForm.get('dataEfetivaLancamento').value);

    return lancamento;
  }

  salvarLancamento(lancamento: ControleLancamento): void {
    const lancamentos: ControleLancamento[] = JSON.parse(localStorage.getItem('lancamentos'));
    lancamento.codigoIdentificadorUnico = this.gerarCodigoIdentificadorUnico();
    lancamentos.push(lancamento);
    localStorage.setItem('lancamentos', JSON.stringify(lancamentos));
  }

  buscarLancamentoEmMemoria(): ControleLancamento {
    const lancamentos: ControleLancamento[] = JSON.parse(localStorage.getItem('lancamentos'));
    return lancamentos.find(l => parseInt(l.codigoIdentificadorUnico) === this.id);
  }

  atualizarLancamento(lancamento: ControleLancamento): void {
    lancamento.codigoIdentificadorUnico = `${this.id}`;
    const lancamentos: ControleLancamento[] = JSON.parse(localStorage.getItem('lancamentos'));
    lancamentos.splice(lancamentos.findIndex(l => parseInt(l.codigoIdentificadorUnico) === this.id), 1);
    lancamentos.push(lancamento);
    localStorage.setItem('lancamentos', JSON.stringify(lancamentos));
  }

  gerarCodigoIdentificadorUnico(): string {
    const lancamentos: ControleLancamento[] = JSON.parse(localStorage.getItem('lancamentos'));
    return lancamentos.reduce((acc, l) => acc += parseInt(l.codigoIdentificadorUnico), 1) + '';
  }

  formatarData(date): string {
    const data = new Date(date);
    const ano = new Intl.DateTimeFormat('pt', { year: 'numeric' }).format(data)
    const mes = new Intl.DateTimeFormat('pt', { month: '2-digit' }).format(data)
    const dia = new Intl.DateTimeFormat('pt', { day: '2-digit' }).format(data)

    return `${dia}/${mes}/${ano}`;
  }

  converterDataENG(data) {
    const dia = data.substring(0, 2);
    const mes = data.substring(3, 5);
    const ano = data.substring(6, 10);

    return `${mes}/${dia}/${ano}`;
  }

}
