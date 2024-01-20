import { NgModule } from "@angular/core";
import { PluckPipe } from "./pluck.pipe";

@NgModule({
    declarations: [PluckPipe],
    exports: [PluckPipe]
})
export class PluckPipeModule {}