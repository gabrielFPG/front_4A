import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Administracion',
                items: [
                    { label: 'admin', icon: 'pi pi-fw pi-home', routerLink: ['/admin'] },
                    { label: 'perfil', icon: 'pi pi-fw pi-home', routerLink: ['/admin/perfil'] }
                ]
            },
            {
                label: 'Inventario',
                items: [
                    { label: 'Categoria', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
                    { label: 'Producto', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
                ]
            },
            {
                label: 'Pedido',
                items: [
                    { label: 'lista pedidos', icon: 'pi pi-fw pi-eye', routerLink: ['/admin/pedido'], badge: 'NEW' },
                    { label: 'nuevo pedidos', icon: 'pi pi-fw pi-eye', routerLink: ['/admin/pedido/nuevo'], badge: 'NEW' },
                    { label: 'clientes', icon: 'pi pi-fw pi-eye', routerLink: ['/admin/cliente'], badge: 'NEW' },
                ]
            },
            {
                label: 'Roles y Usuario',
                items: [
                    { label: 'usuario', icon: 'pi pi-fw pi-users', routerLink: ['/utilities/icons'] },
                    { label: 'roles', icon: 'pi pi-fw pi-desktop', url: ['https://www.primefaces.org/primeflex/'], target: '_blank' },
                ]
            }
        ];
    }
}
