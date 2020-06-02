$(function(){
    //start
    var data = new XMLHttpRequest();
    
    data.open('GET','data.json',true);
    data.send(null);
    
    data.addEventListener('load',function(){
        
        var response = JSON.parse(data.responseText);
        var section = document.querySelector('section');
        var button = document.querySelector('button');
        var itemRow = 3,
            first = 0,
            last = itemRow, k=0,j=0;
        var fadeIn,loop,getItem;
        
       
        getItem = function(){
            k=0;
            for(let i in response.event){
                if(i < last && first <= i){
                    var imgNode = document.createElement('img');
                    imgNode.src = response.event[i];
                    section.append(imgNode);
                    section.children[i].style.opacity = 0;
                }
            }
            fadeIn();
        }
            
        fadeIn = function(){
            loop = setInterval(function(){
                section.children[j].style.opacity = k;
                if(k < 1){ 
                    k += 0.1;
                }else{
                    j++; k=0;
                    if(last <= j) clearInterval(loop);
                }
            },40); 
        }
        getItem();
        section.style.display = 'block';
        
        button.addEventListener('click',function(){
            first += itemRow;
            last += itemRow;
            getItem();
        });

    });
    
    
    //end
});