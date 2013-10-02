$(document).ready(function(){
    console.log('Load Facebook Post Filter');
    filter();
    window.setInterval('filter()',3000);    
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
