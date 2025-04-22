import { Component} from "@angular/core";
import { DevShellComponent } from "@vanillabp/bc-dev-shell-angular";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [DevShellComponent, CommonModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "webapp-angular";
}
