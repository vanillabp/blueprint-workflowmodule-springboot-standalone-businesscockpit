import { Component, OnInit } from "@angular/core";
import { DevShellComponent } from "@vanillabp/bc-dev-shell-angular";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { catchError } from "rxjs/operators";
import { of } from "rxjs";

interface User {
  id: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  groups?: string[];
  attributes?: Record<string, string[]>;
}

@Component({
  selector: "app-root",
  standalone: true,
  imports: [DevShellComponent, CommonModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
  title = "webapp-angular";
  currentUser?: string = undefined;
  users: User[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const that = this;
    this.http.get<User[]>("/user/all").subscribe({
      next: (allUsers) => {
        const headers = new HttpHeaders({
          Accept: "text/plain",
        });
        this.http
          .get<string>("/user/", { headers, responseType: "text" as "json" })
          .pipe(
            catchError((err, caught) => {
              that.currentUser = undefined;
              this.users = allUsers;
              return of();
            }),
          )
          .subscribe({
            next: (currentUser) => {
              that.currentUser = currentUser;
              this.users = allUsers;
            },
            error: (error) => {
              console.error("Error getting current user:", error);
              that.currentUser = undefined;
              this.users = allUsers;
            }
          });
      },
      error: (error) => {
        console.error("Error getting all users:", error);
      }
    });
  }

  changeUser(event: Event) {
    const userId = (event.target as HTMLSelectElement).value;
    console.log("Changing user to:", userId);
    
    if (!userId) {
      console.error("User ID is empty, cannot change user");
      return;
    }
    
    const url = `/user/${userId}`;
    console.log("Sending request to:", url);
    
    this.http.post(url, {}, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).subscribe({
      next: (response) => {
        console.log("User changed successfully, reloading page");
        document.location.reload();
      },
      error: (error) => {
        console.error("Error changing user:", error);
      }
    });
  }
}
