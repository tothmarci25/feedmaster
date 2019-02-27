import { Component, OnInit } from '@angular/core';
import { Group, GroupDisplay, SubGroupDisplay, MaxValue } from 'src/app/interfaces/groups';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GroupDeleteModalComponent } from '../group-delete-modal/group-delete-modal.component';
import { SubgroupDeleteModalComponent } from '../subgroup-delete-modal/subgroup-delete-modal.component';
import { AgeGroup } from 'src/app/enums/agegroup.enum';
import { Nutrition } from 'src/app/enums/nutrition.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-editgroup',
  templateUrl: './editgroup.component.html',
  styleUrls: ['./editgroup.component.scss']
})
export class EditgroupComponent implements OnInit {

  isHeaderEditMode: boolean;
  group: Group;
  groupDisplay: GroupDisplay;
  allergenEnum: any[];
  nutritionEnum: any[];
  ageEnum: any[];


  constructor(
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private router: Router,
    private groupService: GroupService
  ) {
    this.isHeaderEditMode = false;
    this.allergenEnum = this.groupService.getAllergenArray();
    this.nutritionEnum = this.groupService.getNutritionArray();
    this.ageEnum = this.groupService.getAgeGroupArray();
  }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    try {
      this.group = this.groupService.getGroupById(id);
      this.groupDisplay = this.groupService.convertGroupToGroupDisplay(this.group);
      setInterval(() => {
        console.log(this.groupDisplay.subGroups[0].allergens);
      }, 2000);
    } catch (e) {
      this.router.navigate(['/groups']);
    }
  }

  editHeader(): void {
    this.isHeaderEditMode = true;
  }

  saveHeader(): void {
    this.isHeaderEditMode = false;
  }

  deleteGroup(): void {
    this.modalService.open(GroupDeleteModalComponent).result.then();
    //TODO
  }

  deleteSubgroup(): void {
    this.modalService.open(SubgroupDeleteModalComponent).result.then();
    //TODO
  }

  addSubgroup(): void {
    let sg: SubGroupDisplay;
    sg = {
      name: "",
      numberOfPersons: 0,
      allergens: [],
      maxValues: [],
      agegroup: AgeGroup.ONE_TO_THREE
    }
    this.groupDisplay.subGroups.push(sg);
  }

  addAllergen(sg: SubGroupDisplay): void {
    sg.allergens.push("");
  }

  deleteAllergen(sg: SubGroupDisplay, i: number): void {
    sg.allergens.splice(i, 1);
  }

  addNutrition(sg: SubGroupDisplay): void {
    sg.maxValues.push({
      type: Nutrition.maxDailyEnergyKJ,
      value: 0
    })
  }

  deleteNutrition(sg: SubGroupDisplay, i: number): void {
    sg.maxValues.splice(i, 1);
  }

  trackFn(index: number): number {
    return index;
  }

}
