import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { UserlistComponent } from "./admin/userlist/userlist.component";
import { AdduserComponent } from "./admin/userlist/adduser/adduser.component";
import { RegistrationComponent } from "./registration/registration.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { MenusComponent } from "./menus/menus.component";
import { DayColumnComponent } from "./menus/day-column/day-column.component";
import { AddmenuComponent } from "./menus/add/addmenu.component";
import { GroupsComponent } from "./groups/groups.component";
import { EditgroupComponent } from "./groups/editgroup/editgroup.component";
import { IngredientsComponent } from "./ingredients/ingredients.component";
import { RecipeCardComponent } from "./recipes/recipe-card/recipe-card.component";
import { CreateIngredientComponent } from "./ingredients/create-ingredient/create-ingredient.component";
import { ChartModule } from "angular-highcharts";
import { NutritionPieComponent } from './recipes/recipe-card/nutrition-pie/nutrition-pie.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    UserlistComponent,
    AdduserComponent,
    RegistrationComponent,
    RecipesComponent,
    MenusComponent,
    DayColumnComponent,
    AddmenuComponent,
    GroupsComponent,
    EditgroupComponent,
    IngredientsComponent,
    RecipeCardComponent,
    CreateIngredientComponent,
    NutritionPieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
