import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/common/services/authentication.service';

@Component({
  selector: 'app-main-app-menu',
  templateUrl: './main-app-menu.page.html',
  styleUrls: ['./main-app-menu.page.scss'],
})
export class MainAppMenuPage implements OnInit {

  constructor(private authenticationService: AuthenticationService,private renderer: Renderer2, private modalController: ModalController) {
    this.renderer.listen('window', 'click', (e: Event) => {
      this.onClickModalDismiss();
    })
  }

  ngOnInit() {
  }


  logout(){
    this.authenticationService.logout();
    this.onClickModalDismiss();
  }
  async onClickModalDismiss(){
    const modal = await this.modalController.getTop();
    if(modal){
      modal.dismiss();
    }
  }
}
