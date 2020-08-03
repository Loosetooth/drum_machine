 import { decorate, observable } from "mobx";
 
 class DrumStore {
    display = "Test123";
 }

 decorate(DrumStore,{
    display: observable
   });

export const drumStore = new DrumStore();