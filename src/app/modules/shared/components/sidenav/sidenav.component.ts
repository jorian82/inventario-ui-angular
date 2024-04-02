import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy{
  mobileQuery: MediaQueryList;
  menuNav = [
    { name: "Home", route: "home", icon: "home" },
    { name: "Categorias", route: "category", icon: "category" },
    { name: "Productos", route: "product", icon: "production_quantity_limits"}
  ];

  private _mobileQueryListener: () => void;

  constructor(private changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery = media.matchMedia('(max-width: 650px)');
    this.mobileQuery.addEventListener("change", this._mobileQueryListener);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener("change", this._mobileQueryListener);
  }

}
