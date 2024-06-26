import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title = "Grocery";
  items = [
    {
      name: "Milk",
      quantity: 2,
    },
    {
      name: "Eggs",
      quantity: 3,
    },
    {
      name: "Juice",
      quantity: 1,
    },
    {
      name: "Crackers",
      quantity: 2,
    },
    {
      name: "Chicken",
      quantity: 2,
    },
    {
      name: "Beef",
      quantity: 4,
    },
  ]
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {

  }

  removeItem(item, index) {
    console.log("removing item: ", item, index)
    const toast = this.toastCtrl.create({
      message: "removing item: " + index + " ...",
      duration: 3000
    });
    toast.present();
    this.items.splice(index, 1);
  }
  addItem() {
  console.log("adding item")
  this.showAddItemPrompt()
  }
  showAddItemPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Add Item',
      message: "Please enter item...",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
        },
        {
          name: 'quantity',
          placeholder: 'Quantity',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log("cancelled");
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log("Saved clicked", item);
            this.items.push(item);
          },
        }
      ]
    });
    prompt.present();
  }
}
