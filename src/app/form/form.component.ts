import { Component, OnInit } from '@angular/core';
import { fakeData } from './data.model';
declare var $:any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']

})
export class FormComponent implements OnInit {
  categories=['Đồ điện tử','Đồ gia dụng','Đồ gỗ'];
  constructor() { }
  fakepathImg:string='';
  pathImg:string='';

  selected='';
  name:string;
  count:number;
  data=[
    {id:0,name:"Test1",categories:"Đồ điện tử",count:20,img:"may-tinh-van-phong.jpg"},
    {id:1,name:"Test2",categories:"Đồ gia dụng",count:33,img:"bo-ban-ghe-go-phong-khach-phu-dung-go-huong-da-1-3.jpg"}
  ];
  ngOnInit(): void {
    var path;

    $(document).ready(function(){
      // file
      $("#file").change(function(){
        path=this.files[0].name;
        $("#imgChose").hide();

        $("#preview").attr("src","assets/"+path);
      });


     $("#getData .getTd").click(function(){
      var data1 =new Array();
      for(let i=1;i<=3;i++)
       data1.push($(this).find("td:nth-child("+ i +")").html());
      //  var path2=$(this).find("td:nth-child(4) img").attr("src");
      //  data1.push(path2);
      //  console.log(data1);
       $("#imgChose").hide();
       $("#cate").val(data1[1]).attr("selected",true);
      //  $("#name").val(data1[0]);
      //  $("#count").val(data1[2]);

      //  $(".img").attr("src",String(data1[3]));


     });

    //  $(".huy").click(function(){
    //   $("#imgChose").show();
    //   $("#preview").hide();
    //  });

    });

  }
  ChoseFile(){
   document.getElementById('file').click();



  }



  Select(selected){
    this.selected=selected.target.value;
  }

  Add(){
    if(this.name=='' || this.count<0 || this.selected=='')
    {
      alert("Kiểm tra lại thông tin sản phẩm");
      return false;
      }
      if(this.fakepathImg!="")
      this.pathImg=String(this.fakepathImg).substr(12,String(this.fakepathImg).length);
      this.data.push({id:this.data.length,name:this.name,categories:this.selected,count:this.count,img:this.pathImg});
      console.log(this.data);
      this.name='';
      this.count=0;
  }
  Huy(){
    this.name='';
    this.count=0;
    this.fakepathImg="";
    this.pathImg='';
    this.selected='';
  }
  preview;
  idDelete;
  getData(item){

    this.name=item.name;
    this.count=item.count;
    this.preview=item.img;
    this.pathImg =item.img;
    this.selected=item.categories;
    // console.log(item);
    this.fakepathImg="";

  }


  Delete(del){
    // this.data=this.data.filter(id=>del !==this.data);
    console.log(del)
  }
}


