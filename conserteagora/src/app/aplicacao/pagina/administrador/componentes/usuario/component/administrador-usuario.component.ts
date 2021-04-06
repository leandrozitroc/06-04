import { Component, Input, OnInit } from '@angular/core';
import { ConfirmationService, Message, MessageService } from 'primeng/api';
import { EnumTipoAcesso, EnumTipoAcessoFactory } from 'src/app/aplicacao/model/EnumTipoAcesso';
import { Severity, Summary } from 'src/app/aplicacao/model/Message';
import { UsuarioCadastro } from 'src/app/aplicacao/model/UsuarioCadastro';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-administrador-usuario',
  templateUrl: './administrador-usuario.component.html',
  styleUrls: ['./administrador-usuario.component.scss']
})
export class AdministradorUsuarioComponent implements OnInit {

  @Input() public id_permissao: EnumTipoAcesso;

  public displayModal: boolean;

  public search: string = '';

  public header: string = '';

  public title: string = '';

  public registro: UsuarioCadastro = new UsuarioCadastro();

  public usuarios: UsuarioCadastro[] = [];

  constructor(private UsuarioService: UsuarioService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    if (this.id_permissao !== null || this.id_permissao !== undefined) {
      this.title = EnumTipoAcessoFactory.obterDescricaoEnumById(this.id_permissao);
    }
    this.atualizarTela();
  }

  public atualizarTela() {
    this.buscarTodos();
  }

  private buscarTodos() {
    this.UsuarioService.obterUsuarioPorTipoAcesso(this.id_permissao).subscribe({
      next: result => {
        this.usuarios = [];
        for (let index = 0; index < result.entity.length; index++) {
          this.usuarios.push(new UsuarioCadastro(result.entity[index]));
        }
      }, error: erro => {
        this.messageService.add({ severity: Severity.ERROR, summary: Summary.ERROR, detail: erro.error.message });
      }, complete: () => { }
    });
  }

  public buscar() {
    if (this.search !== '') {
      this.UsuarioService.obterUsuarioPorNome(this.search, this.id_permissao).subscribe({
        next: result => {
          this.usuarios = result.entity;
        }, error: erro => {
          this.messageService.add({ severity: Severity.ERROR, summary: Summary.ERROR, detail: erro.error.message });
        }, complete: () => { }
      });
    } else {
      this.buscarTodos();
    }
  }

  public incluirRegistro() {
    this.header = 'Incluir usuário';
    this.registro = new UsuarioCadastro();
    this.registro.id_permissao = EnumTipoAcessoFactory.obterTipoAcesso(this.id_permissao);
    this.displayModal = true;
  }

  public editarRegistro(usuario: UsuarioCadastro) {
    this.header = 'Editar usuário';
    this.registro = new UsuarioCadastro(usuario);
    this.registro.formatarData();
    this.displayModal = true;
  }

  public verificarAlteracao() {
    if (this.registro.id_usuario) {
      this.alterarUsuario();
    } else {
      this.incluirUsuario();
    }
  }

  public alterarUsuario() {
    let message: Message[] = this.registro.validarAlteracaoDadosAdm();
    if (message.length === 0) {
      this.UsuarioService.atualizar(this.registro).subscribe({
        next: result => {
          console.log(result);
          this.atualizarTela();
          this.messageService.add({ severity: Severity.SUCCESS, summary: Summary.SUCCESS, detail: result.message });
        }, error: erro => {
          console.log(erro);
          this.messageService.add({ severity: Severity.ERROR, summary: Summary.ERROR, detail: erro.error.message });
        }, complete: () => {
          this.displayModal = false
        }
      });
    } else {
      this.messageService.addAll(message);
    }
  }

  public incluirUsuario() {
    let message: Message[] = this.registro.validarInclusaoDadosAdm();
    if (message.length === 0) {
      this.UsuarioService.cadastrar(this.registro).subscribe({
        next: result => {
          console.log(result);
          this.atualizarTela();
          this.messageService.add({ severity: Severity.SUCCESS, summary: Summary.SUCCESS, detail: result.message });
        }, error: erro => {
          console.log(erro);
          this.messageService.add({ severity: Severity.ERROR, summary: Summary.ERROR, detail: erro.error.message });
        }, complete: () => {
          this.displayModal = false
        }
      });
    } else {
      this.messageService.addAll(message);
    }
  }

  public bloquearRegistro(usuario: UsuarioCadastro) {
    this.confirmationService.confirm({
      message: `Confirma o bloqueio do usuário ${usuario.txt_nome}?`,
      accept: () => {
        this.UsuarioService.bloquear(usuario).subscribe({
          next: result => {
            console.log(result.entity);
            this.atualizarTela();
            this.messageService.add({ severity: Severity.SUCCESS, summary: Summary.SUCCESS, detail: result.message });
          }, error: erro => {
            this.messageService.add({ severity: Severity.ERROR, summary: Summary.ERROR, detail: erro.error.message });
          }, complete: () => {
          }
        });
      }
    });
  }

  public desbloquearRegistro(usuario: UsuarioCadastro) {
    this.confirmationService.confirm({
      message: `Confirma o bloqueio do usuário ${usuario.txt_nome}?`,
      accept: () => {
        this.UsuarioService.desbloquear(usuario).subscribe({
          next: result => {
            console.log(result.entity);
            this.atualizarTela();
            this.messageService.add({ severity: Severity.SUCCESS, summary: Summary.SUCCESS, detail: result.message });
          }, error: erro => {
            this.messageService.add({ severity: Severity.ERROR, summary: Summary.ERROR, detail: erro.error.message });
          }, complete: () => {
          }
        });
      }
    });
  }

}
