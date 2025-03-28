import { AfterViewInit, Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { ProductService } from '../../../../services/common/product.service';
import { List_Product } from '../../../../contracts/list_product';
import { MatTableDataSource } from '@angular/material/table';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertifyService, MessageType, Position } from '../../../../services/admin/alertify.service';
import { MatPaginator } from '@angular/material/paginator';
declare var $ : any;
@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent extends BaseComponent implements OnInit {
  constructor(private productService:ProductService,spinner:NgxSpinnerService,private alertifyService:AlertifyService ) {
    super(spinner);
  }

  

  displayedColumns: string[] = ['name', 'stock', 'price', 'createdDate','updatedDate','edit','delete'];
  dataSource : MatTableDataSource<List_Product> = null;
  @ViewChild(MatPaginator) paginator:MatPaginator;

  async getProducts(){
    this.showSpinner(SpinnerType.BallAtom)
    const allProducts :{totalCount : number ;products:List_Product[]} = await this.productService.read(this.paginator ? this.paginator.pageIndex : 0,this.paginator ? this.paginator.pageSize : 5,() => this.hideSpinner(SpinnerType.BallAtom),errorMessage => this.alertifyService.message(errorMessage,{
      dismissOthers:true,
      messageType:MessageType.Error,
      position:Position.TopRight
    }));
    this.dataSource = new MatTableDataSource<List_Product>(allProducts.products)
    this.paginator.length = allProducts.totalCount;
    
  }

  async pageChanged(){
    await this.getProducts();
  }

  delete(id, event) {
    alert(id)
    const img: HTMLImageElement = event.srcElement;
    $(img.parentElement.parentElement).fadeOut(2000)
    }

  async ngOnInit(){
    await this.getProducts();
  }

  

}
