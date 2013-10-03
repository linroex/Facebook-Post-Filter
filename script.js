$(document).ready(function(){
    console.log('Load Facebook Post Filter');    
    
    chrome.storage.sync.get('switcher',function(e){
        if(e['switcher']=='on'){
            filter();
            window.setInterval('filter()',3000);        
        }else if(e['switcher']==undefined){
            chrome.storage.sync.set({'switcher':'on'});
            chrome.storage.sync.set({'block.keyword':''});
        }
        
    });
    
    
})
function filter(){
    chrome.storage.sync.get('block.keyword',function(r){
        if(r['block.keyword'].trim()!=''){
            var keyword = r['block.keyword'].split("\n");
            for (var i = 0; i<keyword.length; i++) {
                $('._5jmm:contains("' + keyword[i] + '")').fadeOut();
                $('.storyContent:contains("' + keyword[i] + '")').fadeOut();
                
            };    
        }
        
        
    })

}
