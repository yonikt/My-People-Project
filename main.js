//API

class API{

constructor(){
 this.data={}
 }

loadData(){

 let dis=this.data

    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users',
        dataType: 'json',
        success: function(result) {
        dis.name =  result.map(i=>i.name)
        dis.email = result.map(i=>i.email)
        }
    })

 }

}

//RENDER

class Renderer{

_renderUsers=function(obj){
    for(let i=0; i<10; i++){
    $('.container').append(`<div class='woo'> name: ${obj.name[i]} <br>
     email: ${obj.email[i]}<br><br></div>`)
    }
}

}

//MAIN

const api=new API
const render=new Renderer

$("button").on('click',function(){
    api.loadData()
})

$("button").on('click',function(){
    render._renderUsers(api.data)
})