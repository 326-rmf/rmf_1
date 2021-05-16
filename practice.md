methods:{
addItem:function(item){
this.selectorItems.push(item);//push方法
this.selectorItems = [...new Set(this.selectorItems)];},//去重
delItem:function(item,index){
this.selectorItems.splice(index,1)}}
for(var i = 0;i < this.selectorItems.length;i++){
if(item.id == this.selectorItems[i].id)return;}
var idRepeat = this.selectorItems.filter(function(v){
retur v.id == item.id});
