
// Bài 1:tính thuế thu nhập cá nhân


var btnTTT = document.getElementById("btnTTT");
btnTTT.onclick = function(){
    //đầu vào:
    var Ten = document.getElementById("Ten").value;
    var TTN = document.getElementById("TTN").value*1;
    var NPT = document.getElementById("NPT").value*1;
    var TTT = 0;

    //xử lí:
    var chiuThue = TTN-4000000-NPT*1600000;
     if(chiuThue>0 && chiuThue<=60000000){
     TTT += chiuThue*(5/100);
     }else if(chiuThue>60000000 && chiuThue<=120000000){
     TTT += chiuThue*(10/100)
     }else if(chiuThue>120000000 && chiuThue<=210000000){
     TTT += chiuThue*(15/100);
     }else if(chiuThue>210000000 && chiuThue<=384000000){
     TTT += chiuThue*(20/100);
     }else if(chiuThue>384000000 && chiuThue<=624000000){
     TTT += chiuThue*(25/100);
     }else if(chiuThue>624000000 && chiuThue<=960000000){
     TTT += chiuThue*(30/100);
     }else if(chiuThue>960000000){
     TTT += chiuThue*(35/100);
     }else{
     TTT += alert("Số tiền thu nhập không hơn lệ");
     };

     var currentFormat=new Intl.NumberFormat("VN-vn");
     // đầu ra:
     document.getElementById("showInfoTTT").innerHTML="<p class='alert alert-success'>Họ tên: "+Ten+"</p><p class='alert alert-success'>Tiền thuế thu nhập cá nhân: "+ currentFormat.format(TTT) +"VND</p>";
};



// Bài 2: Tính tiền cáp
 
function myFunction() {
    var chonKhach = document.getElementById("chonKhach").value;
    document.getElementById("SKN").style.display=chonKhach=="doanhNghiep"?"block":"none";
};
function tinhTong(a,b,c,d,e,f){
    var tong=0;

    e>10?tong+=(a+b+c*d)+(e-10)*f:tong+=(a+b+c*d);
    return tong; 
};
var btnTienCap = document.getElementById("btnTienCap");
btnTienCap.onclick = function(){
    //đầu vào:
    var chonKhach = document.getElementById("chonKhach").value;
    var maKH = document.getElementById("maKH").value;
    var kenhCC = document.getElementById("kenhCC").value*1;
    var SKN = document.getElementById("SKN").value*1;
    var tienCap = 0;
    //xử lý: 
     if(chonKhach=="doanhNghiep"){
     tienCap+= tinhTong(15,75,50,kenhCC,SKN,5);
     }else if(chonKhach=="nhaDan"){
     tienCap+= tinhTong(4.5,20.5,7.5,kenhCC,0,0);
     }else{
     tienCap+= alert("Hãy chọn loại khách hàng");
     };
     const FORMATTER = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
      });

    //đầu ra:
    document.getElementById("showInfoTienCap").innerHTML ="<p class='alert alert-success'>Mã khách hàng: "+maKH+"</p><p class='alert alert-success'>Tiền cáp: "+ FORMATTER.format(tienCap)+"</p>";
}
