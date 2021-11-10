import { Component, Injectable, OnInit } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {BehaviorSubject} from 'rxjs';


/**
 * Json node data with nested structure. Each node has a filename and a value or a list of children
 */
 export class FileNode {
  children: FileNode[] = [];
  displayName: string='';
  iconName: string='';
  route: string='';

}

/**
 * The Json tree data in string. The data could be parsed into Json object
 */

 const TREE_DATA = JSON.stringify([{
  displayName: 'داشبورد',
  iconName: 'recent_actors',
  route: '/panel'
}, {
  displayName: 'مدیریت مشتریان',
  iconName: 'group',
  route: '',
  children: [{
          displayName: 'اشخاص حقیقی',
          iconName: 'group',
          route: '',
          children: [
              {
                  displayName: 'استعلام اشخاص حقیقی ایرانی',
                  iconName: 'horizontal_rule',
                  route: '/panel/customer-management/inquiry-real-person'
              }, {
                  displayName: 'استعلام شخص حقیقی غیر ایرانی با شناسه فراگیر',
                  iconName: 'horizontal_rule',
                  route: '/panel/customer-management/inquiry-non-iranian-real-person-identification-no',
                  

              }, {
                  displayName: 'استعلام شخص حقیقی غیر ایرانی با  شماره پاسپورت',
                  iconName: 'horizontal_rule',
                  route: '/panel/customer-management/real-person-foreign-passport-inquiry'
              }
          ]
      }, {
          displayName: 'اشخاص حقوقی',
          iconName: 'group',
          route: '',
          children: [{
                  displayName: 'استعلام شخص حقوقی ایرانی با شناسه ملی',
                  iconName: 'horizontal_rule',
                  route: '/panel/customer-management/legal-person-persian-identification-inquiry'
              }, {
                  displayName: 'استعلام شخص حقوقی ایرانی بدون شناسه ملی',
                  iconName: 'horizontal_rule',
                  route: '/panel/customer-management/legal-person-persian-wo-identification-inquiry'
              }
          ]
      },
  ]
}, {
  displayName: 'گروه بندی اشخاص',
  iconName: 'reduce_capacity',
  route: '',
  children: [{
          displayName: 'گروه بندی اشخاص',
          iconName: 'horizontal_rule',
          route: '/panel/grouping-person/groupingPerson',
      }, {
          displayName: 'تخصیص شخص به گروه',
          iconName: 'horizontal_rule',
          route: '/panel/grouping-person/show-people',
      },
      {
          displayName: '  نمایش اشخاص',
          iconName: 'horizontal_rule',
          route: '',
      },
  ]
}, {
  displayName: 'مدیریت واحد های همکار',
  iconName: 'manage_accounts',
  route: '',
  children: [{
          displayName: 'تعریف واحد همکار',
          iconName: 'group',
          route: '',
          children: [{
                  displayName: 'نمایش واحد همکار',
                  iconName: 'horizontal_rule',
                  route: ''
              }, {
                  displayName: 'افزودن واحد همکار',
                  iconName: 'horizontal_rule',
                  route: '/panel/add-unit-teammate/addunit'
              }, {
                  displayName: 'لیست واحد همکار',
                  iconName: 'horizontal_rule',
                  route: '/panel/add-unit-teammate/teamunit'
              }
          ]
      },
  ]
}, {
  displayName: 'حسابداری ',
  iconName: 'point_of_sale',
  route: 'disney'

}, {
  displayName: '  دریافت و پرداخت',
  iconName: 'credit_card',
  route: 'disney'

}

]
);



 const TREE_DATA1 = JSON.stringify({
  Applications: {
    Calendar: 'app',
    Chrome: 'app',
    Webstorm: 'app'
  },
  Documents: {
    angular: {
      src: {
        compiler: 'ts',
        core: 'ts'
      }
    },
    material2: {
      src: {
        button: 'ts',
        checkbox: 'ts',
        input: 'ts'
      }
    }
  },
  Downloads: {
    October: 'pdf',
    November: 'pdf',
    Tutorial: 'html'
  },
  Pictures: {
    'Photo Booth Library': {
      Contents: 'dir',
      Pictures: 'dir'
    },
    Sun: 'png',
    Woods: 'jpg'
  }
});


@Injectable()
export class FileDatabase {
  dataChange = new BehaviorSubject<FileNode[]>([]);

  get data(): FileNode[] { return this.dataChange.value; }

  constructor() {
    this.initialize();
  }

  initialize() {
    // Parse the string to json object.
    const dataObject:Array<FileNode> = JSON.parse(TREE_DATA) as Array<FileNode>;
  //  const data= Array.of(dataObject);
    // Build the tree nodes from Json object. The result is a list of `FileNode` with nested
    //     file node as children.
    // const data = this.buildFileTree(dataObject, 0);

    // Notify the change.
    this.dataChange.next(dataObject);
  }

  /**
   * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
   * The return value is the list of `FileNode`.
   */
 
}



/**
 * @title Tree with nested nodes
 */
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [FileDatabase]
})
export class MenuComponent implements OnInit {

  nestedTreeControl: NestedTreeControl<FileNode>;
  nestedDataSource: MatTreeNestedDataSource<FileNode>;

  constructor(database: FileDatabase) {
    this.nestedTreeControl = new NestedTreeControl<FileNode>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();

    database.dataChange.subscribe(data => this.nestedDataSource.data = data);
  }
  ngOnInit(): void {
  }

  
  hasNestedChild = (_: number, nodeData: FileNode) => {
     return nodeData.children && nodeData.children.length>0;
  
      }

  private _getChildren = (node: FileNode) => node.children;
 

}
