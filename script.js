$(document).ready(function(){
    chrome.storage.sync.get('switcher',function(e){
        console.log('Load Facebook Post Filter');  
        filter();  
        
        if(e['switcher']=='on'){
            $("#contentArea").bind("DOMNodeInserted",function(){
                filter();
            });
        }else if(e['switcher']==undefined){
            chrome.storage.sync.set({'switcher':'on'});
            chrome.storage.sync.set({'block.keyword':''});
        };
    })
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
